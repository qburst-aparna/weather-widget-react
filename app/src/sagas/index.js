import { takeEvery, all } from 'redux-saga/effects';
import  fetchWeather  from './weather';

export default function* rootSaga() {
   yield all([
    yield takeEvery('FETCH_WEATHER', fetchWeather)
   ]);
}