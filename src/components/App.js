import React from "react";
import Layout from "./Layout/Layout";
// import Counter from "./Counter/Counter";
import Phonebook from "./Phonebook/Phonebook";
function App() {
  return (
    <>
      {/* <Layout>
        <Counter />
      </Layout> */}
      <Layout>
        <Phonebook />
      </Layout>
    </>
  );
}

export default App;
