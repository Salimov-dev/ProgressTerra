import React from "react";
import { styled } from "styled-components";
// icons
import BurningIcon from "../../assets/icons/burning.png";
import ArrowIcon from "../../assets/icons/arrow.svg";
// components
import Loader from "../../components/loader";

const Component = styled.div`
  width: 297px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 96px;
  left: 20px;
  background-color: white;
  padding: 18px 18px 19px 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 16px 0px rgba(0, 0, 0, 0.2);
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RightSide = styled.div`
  padding-top: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 24px;
  font-weight: 700;
`;

const SubTitleContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const SubTitleDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 5px;
  color: rgba(151, 151, 151, 1);
`;

const SubTitleBurningQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: rgba(151, 151, 151, 1);
`;

const BurningImage = styled.img`
  width: 13px;
  padding: 0 3px 3px 0;
`;

const ArrowImage = styled.img`
  cursor: pointer;
`;

const Bonuses = ({
  currentQuantity,
  dateBurningTransform,
  forBurningQuantity,
  isLoading,
}) => {
  return (
    <Component>
      <LeftSide>
        <Title>
          {!isLoading ? currentQuantity : <Loader width="12px" height="12px" />}
          <span>бонусов</span>
        </Title>

        <SubTitleContainer>
          <SubTitleDate>
            {!isLoading ? (
              dateBurningTransform
            ) : (
              <Loader width="8px" height="8px" />
            )}
            <span>сгорит</span>
          </SubTitleDate>
          <SubTitleBurningQuantity>
            <BurningImage src={BurningIcon} alt="" />
            {!isLoading ? (
              forBurningQuantity
            ) : (
              <Loader width="8px" height="8px" />
            )}
            <span>бонусов</span>
          </SubTitleBurningQuantity>
        </SubTitleContainer>
      </LeftSide>

      <RightSide>
        <ArrowImage src={ArrowIcon} alt="Next" />
      </RightSide>
    </Component>
  );
};

export default Bonuses;
