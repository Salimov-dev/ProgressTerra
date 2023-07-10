import React from "react";
import { styled } from "styled-components";

const Component = styled.div`
  height: 148px;
  background: linear-gradient(
    to bottom,
    rgba(210, 51, 62, 1),
    rgba(245, 75, 85, 1)
  );
`;

const Footer = () => {
  return <Component />;
};

export default Footer;
