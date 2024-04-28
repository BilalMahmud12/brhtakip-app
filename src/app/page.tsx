'use client'

import Logout from "@/components/Logout";
import { withAuthenticator } from "@aws-amplify/ui-react"

function App() {

  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      <Logout />
    </>
  );
}

export default withAuthenticator(App);