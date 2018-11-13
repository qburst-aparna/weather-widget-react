export const actions = {
    fetchWeatherData: () => ({
      type: 'FETCH_WEATHER'
    }),
    updateTitle: (data) => ({
      type: 'TITLE_CHANGE',
      payload: data
    }),
    changeDegreeOfTemp: (data) => ({
      type: 'TEMP_DEGREE_CHANGE',
      payload: data
    }), 
    toggleWindVisibility: (data) => ({
      type: 'CHANGE_WIND_VISIBLE',
      payload: data
    })
  };