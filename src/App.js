import logo from "./logo.svg";
import "./App.css";

// AmplifySignInをimport
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

// AmplifyAuthenticator内にAmplifySignInを追加し
// 以下参考に文言を渡していく
function App() {
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        slot="sign-in"
        headerText="サインイン画面"
        submitButtonText="サインイン"
        formFields={[
          {
            type: "username",
            label: "サインインID *",
            placeholder: "ユーザ名を入力",
            required: true,
          },
          {
            type: "password",
            label: "パスワード *",
            placeholder: "パスワードを入力",
            required: true,
          },
        ]}
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
