import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

const Home = () => {
  return (
    // <div style={{ color: `purple` }}>
    <Layout>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
     
    // </div>
  );
}

export default Home;
