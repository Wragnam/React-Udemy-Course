import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store";

const Auth = () => {

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authActions.authenticate());
  };


  function handleSubmit(event){
    event.preventDefault();
    handleLogin();
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
