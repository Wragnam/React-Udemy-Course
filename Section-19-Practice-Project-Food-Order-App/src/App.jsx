import Header from "./components/Header";
import appLogo from "./assets/logo.jpg";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header title="ReactFood" logo={appLogo} buttonText="Cart" />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
