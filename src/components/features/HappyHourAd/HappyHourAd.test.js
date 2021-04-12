import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const params = {
  title: '.title',
  promoDesription: '.promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and desription', () => {
    const component = shallow(<HappyHourAd />);

    expect(component.exists(params.title)).toEqual(true);
    expect(component.exists(params.promoDescription)).toEqual(true);
  });
});