
  import { call, put } from "redux-saga/effects";
  import * as endpoints from "../helpers/api/endpoints";

  export default function* fetchWeather() {
    try {
      const apiData = yield call(endpoints.fetchWeather);
      yield put({ type: "FETCH_WEATHER_SUCCESS", payload: apiData });
    } catch (error) {
      yield put({ type: "FETCH_WEATHER_FAIL", payload: error });
    }
  }