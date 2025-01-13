import { useActionState, useContext } from "react";
import Input from "./Input";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import {
  isMoreThanOneWord,
  containsNumeric,
  containsLetter,
} from "../verification";
import { addOrder } from "../http.js";
import { CartContext } from "../store/cart-context.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";

const CheckoutModal = forwardRef(function CheckoutModal(
  { total, title, handleSuccessfullCheckoutFn },
  ref
) {
  const dialog = useRef();

  const [formState, formAction] = useActionState(checkOutAction, {
    errors: null,
  });

  const { cartItems, clearCart } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  async function checkOutAction(prevState, formData) {
    const name = formData.get("full-name");
    const email = formData.get("email");
    const street = formData.get("street");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");

    let errors = [];

    if (!isMoreThanOneWord(name)) {
      errors.push("Use your full name and surname");
    }

    if (containsLetter(postalCode)) {
      errors.push("Postal code can only contain numbers");
    }

    if (containsNumeric(city)) {
      errors.push("City cannot contain numbers");
    }

    const enteredValues = {
      name,
      email,
      street,
      postalCode,
      city,
    };

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: enteredValues,
      };
    }

    const resp = await addOrder({
      order: {
        items: cartItems,
        customer: {
          name,
          email,
          street,
          "postal-code": postalCode,
          city,
        },
      },
    });

    if (resp === null) {
      clearCart();
      handleSuccessfullCheckoutFn();
      dialog.current.close();
    } else {
      return {
        errors: [resp.message],
        enteredValues: enteredValues,
      };
    }

    return {};
  }

  return createPortal(
    <dialog className="modal" id="modal" ref={dialog}>
      <h2>{title}</h2>
      {total && <p>Total Amount: {currencyFormatter.format(total)}</p>}
      <form action={formAction}>
        <Input
          label="Full Name"
          type="text"
          name="full-name"
          defaultValue={formState.enteredValues?.name}
        />
        <Input
          label="E-Mail Address"
          type="email"
          name="email"
          defaultValue={formState.enteredValues?.email}
        />
        <Input
          label="Street"
          type="text"
          name="street"
          defaultValue={formState.enteredValues?.street}
        />
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            name="postal-code"
            defaultValue={formState.enteredValues?.postalCode}
          />
          <Input
            label="City"
            type="text"
            name="city"
            defaultValue={formState.enteredValues?.city}
          />
        </div>
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <div className="modal-actions">
          <Button textOnly onClick={() => dialog.current.close()} type="button">
            Close
          </Button>
          <Button>Submit Order</Button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CheckoutModal;
