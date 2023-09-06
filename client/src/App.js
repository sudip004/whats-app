import Messenger from "./components/Messenger";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

const clintId =
  "1022861269644-9hpebts2puut6cc7r58crg0ms03c4i4k.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clintId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
