import React from 'react';
import { style } from './HappyHourAd.scss';

const params = {
  title: '.title',
  promoDesription: '.promoDescription',
};

class HappyHourAd extends React.Component {
  render(){
    return(
      <div>
        <h3 className={style.title}>{params.title}</h3>
        <div className={style.countdown}>
          {params.promoDescription}
        </div>
      </div>
    );
  }
}

export default HappyHourAd;