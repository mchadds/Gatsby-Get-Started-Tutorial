import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
       {/* <div style={{ color: `teal` }}> */}
      <Header headerText="Contact" />
      <p style={{ color: `teal` }} >Send us a message!</p>
     {/* </div> */}
    </Layout>
    
  )
}

export default Contact;