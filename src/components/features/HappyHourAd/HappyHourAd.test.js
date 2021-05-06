/*import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDesription: '.promoDescription',
};

xdescribe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and desription', () => {
    const component = shallow(<HappyHourAd {...select} />);

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
});

xdescribe('Component HappyHourAd with mocked Date', () => {
  const customDate = '2019-05-14T11:57:58.135Z';
  const trueDate = Date;

  const mockDate = class extends Date {
    constructor(...args) {
      if(args.length){
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now(){
      return (new Date(customDate)).getTime();
    }
  };

  it('should show correct at 11:57:58', () => {
    global.Date = mockDate;

    global.Date = trueDate;
  });

  it('should show correct at 11:57:58', () => {
    global.Date = mockDate;
  
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.descr).text();
    expect(renderedTime).toEqual('122');
  
    global.Date = trueDate;
  });
});*/