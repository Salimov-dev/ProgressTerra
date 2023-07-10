import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bonusInfoReducer from "./bonus-info.store";

const rootReducer = combineReducers({
  bonusInfo: bonusInfoReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
