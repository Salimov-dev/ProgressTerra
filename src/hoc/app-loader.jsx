import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBonusInfo } from "../store/bonus-info.store";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBonusInfo());
  }, []);

  return children;
};

export default AppLoader;
