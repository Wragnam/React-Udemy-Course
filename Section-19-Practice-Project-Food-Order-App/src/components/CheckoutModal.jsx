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

const CheckoutModal = forwardRef(function CheckoutModal(
  { total, title, cart, handleSuccessfulCheckoutFn },
  ref
) {
  const dialog = useRef();

  const [formState, formAction, pending] = useActionState(checkOutAction, {
    errors: null,
  });

  const { clearCart } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  async function checkOutAction(prevState, formData) {
    const name = formData.get("fullName");
    const email = formData.get("email");
    const street = formData.get("street");
    const postalCode = formData.get("postalCode");
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
        items: cart,
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
      handleSuccessfulCheckoutFn();
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
      {total && <p>Total Amount: ${total.toFixed(2)}</p>}
      <form action={formAction}>
        <Input
          label="Full Name"
          type="text"
          name="fullName"
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
            name="postalCode"
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
          <button className="text-button" onClick={()=>dialog.current.close()}>
            Close
          </button>
          <button className="button">Submit Order</button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CheckoutModal;
