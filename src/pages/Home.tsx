import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Section from "./../components/Section";
import api from "./../api";
import SwipeSlider from "./../components/SwipeSlider";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <Section>
        <Container>
          <h2>Home</h2>
          <SwipeSlider />
        </Container>
      </Section>
    </>
  );
};

export default Home;
