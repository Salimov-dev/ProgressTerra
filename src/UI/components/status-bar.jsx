// libraries
import React from "react";
import dayjs from "dayjs";
import { styled } from "styled-components";
// icons
import chargeLevelIcon from "../../assets/icons/charge-level.png";

const Component = styled.div`
  height: 24px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
`;

const Charge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FigmaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5px;
`;

const CircleEmpty = styled.div`
  width: 4.5px;
  height: 4.5px;
  border-radius: 50%;
  border: 1px solid black;
`;

const CircleFill = styled.div`
  width: 6.5px;
  height: 6.5px;
  border-radius: 50%;
  background-color: black;
`;

const Image = styled.img`
  width: 24px;
`;

const StatusBar = () => {
  const timeNow = dayjs().format("h:mm A");

  return (
    <Component>

      <FigmaContainer>
        <CirclesContainer>
          <CircleFill></CircleFill>
          <CircleFill></CircleFill>
          <CircleFill></CircleFill>
          <CircleEmpty></CircleEmpty>
          <CircleEmpty></CircleEmpty>
        </CirclesContainer>
        <span>Figma</span>
      </FigmaContainer>

      <div>{timeNow}</div>

      <Charge>
        <span>42%</span>
        <Image src={chargeLevelIcon} alt="Charge" />
      </Charge>

    </Component>
  );
};

export default StatusBar;
