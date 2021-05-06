import React from 'react';
import { style } from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  render(){
    return(
      <div>
        <h3 className={style.title} title ></h3>
        <div className={style.countdown} promoDescription={'.promoDescription'}></div>
      </div>
    );
  }
}

export default HappyHourAd;