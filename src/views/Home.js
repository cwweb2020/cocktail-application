import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { Heading } from "../styled/Heading";
import { Section } from "../styled/Section";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  return (
    <>
      <Section  className="u-section">
      <Heading fs="2.9rem"  font="'Raleway', sans-serif">The 100 most popular drinks</Heading>
        <ItemListContainer />
      </Section>
      <ScrollTop />
    </>
  );
};

export default Home;
