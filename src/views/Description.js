import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { Section } from "../styled/Section";

const Description = () => {
  return (
    <>
      <Section p="85px" className="desc-section">
        <div className="wrapper-description">
        <ItemDetailContainer />

        </div>
      </Section>
    </>
  )
};

export default Description;
