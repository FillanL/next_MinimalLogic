import { useState } from "react";
const signin = () => {
  const initUserCredentials = {
    email: "",
    password: "",
  };
  const [userCredentials, setUserCredentials] = useState(initUserCredentials);

  const formInputChange = (e: EventListener) => {};
  const submitForm = () => {};

  return (
    <div>
      <form onSubmit={() => submitForm}>
        <input
          type="email"
          name="email"
          value={userCredentials.email}
          required
        />
        <input
          type="password"
          name="password"
          value={userCredentials.password}
          required
        />
        <button>sign in</button>
      </form>
    </div>
  );
};

export default signin;
