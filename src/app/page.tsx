'use client'
import { Authenticator, Text, View, useAuthenticator } from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const components = {
  Header() {
    return (
      <View textAlign="center">
        <Text><span style={{ color: "white" }}>Authenticator Header</span></Text>
      </View>
    );
  },
};

function CustomAuthenticator() {
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user) {
      console.log("Redirecting to dashboard", user);
      redirect("/dashboard");
    }
  }, [user]);

  return <Authenticator components={components} />;
}

function App() {

  return (
    <Authenticator.Provider>
      <CustomAuthenticator />
    </Authenticator.Provider>
  );
}

export default App