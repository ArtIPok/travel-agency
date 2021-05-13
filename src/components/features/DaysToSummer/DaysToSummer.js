import React from 'react';

import styles from './DaysToSummer.scss';

const currentDate = new Date();

const nextSummerFirstDay = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21, 0, 0, 0, 0));
const nextSummerLastDay = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23, 59, 59, 59, 59));

class DaysToSummer extends React.Component {
  constructor() {
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  getCountdownDate() {
    if(currentDate > nextSummerLastDay){
      nextSummerFirstDay.setUTCFullYear(currentDate.getUTCFullYear() + 1);
      nextSummerLastDay.setUTCFullYear(currentDate.getUTCFullYear() + 1);
    }
    const differenceDay = Math.floor((nextSummerFirstDay - currentDate.getTime())/(1000 * 60 * 60 * 24));

    return differenceDay;
  }

  render() {
    const countdownDate = this.getCountdownDate();

    if (nextSummerFirstDay <= currentDate && currentDate < nextSummerLastDay) {
      return(
        <div className={styles.component}>
          <div className={styles.summerDescription}>
          </div>
        </div>
      );
    } else if (countdownDate == 1) {
      return(
        <div className={styles.component}>
          <div className={styles.summerDescription}>
            {countdownDate} day to summer!
          </div>
        </div>
      );
    } else {
      return(
        <div className={styles.component}>
          <div className={styles.summerDescription}>
            {countdownDate} days to summer!
          </div>
        </div>
      );
    }
  }
}

export default DaysToSummer;
