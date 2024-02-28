import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <section>
      <h1>Hos geldiniz</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
        <p1> write component or directly say hello here</p1>
      </Route>
    </section>
  );
};

export default Welcome;
