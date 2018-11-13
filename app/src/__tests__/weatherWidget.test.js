import React from "react";
import { shallow, mount, render } from 'enzyme';

import WeatherForm from '../components/widget';


describe('Weather component', () => {
  test('should shallow correctly', () => {
      expect(shallow(
        <WeatherForm />
      )).toMatchSnapshot() 
  })
  test('should mount correctly', () => {
      expect(mount(
        <WeatherForm />
      )).toMatchSnapshot() 
  })
  test('should render correctly', () => {
      expect(render(
        <WeatherForm />
      )).toMatchSnapshot() 
  })
})