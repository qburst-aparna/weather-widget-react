export const initialState = {
    error: null,
    fetchSuccess: false,
    temperature: 0,
    wind: {},
    title: '',
    degreeOfTemp: 'c', //f for farenheit
    showWind: true
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case 'FETCH_WEATHER':
          return { ...state, error: null, fetchSuccess: false };
       case 'TITLE_CHANGE':
          return { ...state, error: null, title: action.payload };
       case 'TEMP_DEGREE_CHANGE':
          return { ...state, degreeOfTemp: action.payload, error: null };
       case 'CHANGE_WIND_VISIBLE': {
          return {...state, showWind: action.payload, error: null}
       }
       case 'FETCH_WEATHER_SUCCESS': {
           const data = action.payload;
           return { ...state, wind: data.wind, temperature: data.main.temp, error: null, fetchSuccess: true};
       }
       case 'FETCH_WEATHER_FAIL': {
          const error = action.payload;
          return { ...state, error };
       }
       default:
          return state;
    }
  };
  export default reducer;
