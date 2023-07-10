import React from "react";
// libraries
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
// components
import Footer from "./components/footer";
import Bonuses from "./components/bonuses";
import StatusBar from "./components/status-bar";
import MainSection from "./components/main-section";
// store
import { getBonusInfo, getBonusInfoStatus } from "../store/bonus-info.store";

const Component = styled.div`
  width: 375px;
  height: 100vh;
  position: relative;
`;

const BonusInfo = () => {
  const bonusInfo = useSelector(getBonusInfo());
  const bonusInfoLoadingStatus = useSelector(getBonusInfoStatus());
  const { currentQuantity, dateBurning, forBurningQuantity } = bonusInfo;
  const dateBurningTransform = dayjs(dateBurning).format("D.MM");

  return (
    <Component>
      <StatusBar />
      <MainSection />
      <Footer />
      <Bonuses
        currentQuantity={currentQuantity}
        dateBurningTransform={dateBurningTransform}
        forBurningQuantity={forBurningQuantity}
        isLoading={bonusInfoLoadingStatus}
      />
    </Component>
  );
};

export default BonusInfo;
