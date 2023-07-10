import React from "react";
import { styled } from "styled-components";
import informationButtonIcon from "../../assets/icons/information-button.png";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 28px 76px 25px;
`;

const Image = styled.img`
  width: 24px;
  cursor: pointer;
`;

const MainSection = () => {
  return (
    <Main>
      <span>ЛОГОТИП</span>
      <Image src={informationButtonIcon} alt="Info" />
    </Main>
  );
};

export default MainSection;
