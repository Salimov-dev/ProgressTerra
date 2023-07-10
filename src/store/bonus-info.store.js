import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bonusInfoSlice = createSlice({
  name: "bonusInfo",
  initialState: {
    entities: {},
    isLoading: true,
    error: null,
  },
  reducers: {
    bonusInfoRequested: (state) => {
      state.isLoading = true;
    },
    bonusInfoReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    bonusInfoFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: bonusInfoReducer, actions } = bonusInfoSlice;
const { bonusInfoRequested, bonusInfoReceived, bonusInfoFailed } = actions;

export const loadBonusInfo = () => async (dispatch) => {
  const accessKey = "891cf53c-01fc-4d74-a14c-592668b7a03c";
  const clientId = "2c44d8c2-c89a-472e-aab3-9a8a29142315";
  const deviceId = "7db72635-fd0a-46b9-813b-1627e3aa02ea";
  let accessToken;

  dispatch(bonusInfoRequested);

  try {
    const clientUrl = "http://84.201.188.117:5021/api/v3/clients/accesstoken";

    const requestBody = {
      idClient: clientId,
      accessToken: "",
      paramName: "device",
      paramValue: deviceId,
      latitude: 0,
      longitude: 0,
      sourceQuery: 0,
    };

    const clientConfig = {
      headers: {
        AccessKey: accessKey,
      },
    };

    const clientResponse = await axios.post(
      clientUrl,
      requestBody,
      clientConfig
    );

    accessToken = clientResponse.data.accessToken;
  } catch (error) {
    dispatch(bonusInfoFailed(error));
  }

  try {
    const bonusConfig = {
      headers: {
        AccessKey: accessKey,
        AccessToken: accessToken,
      },
    };

    const bonusUrl = `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${accessToken}`;
    const bonusResponse = await axios.get(bonusUrl, bonusConfig);
    const bonusInfo = bonusResponse.data.data;

    dispatch(bonusInfoReceived(bonusInfo));
  } catch (error) {
    dispatch(bonusInfoFailed(error));
  }
};

export const getBonusInfo = () => (state) => state.bonusInfo.entities;
export const getBonusInfoStatus = () => (state) => state.bonusInfo.isLoading;

export default bonusInfoReducer;
