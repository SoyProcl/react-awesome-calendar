import React from 'react';
import { getMonthName } from './util/calendar';
import styles from './index.styles.scss';
import { dailyMode, monthlyMode, yearlyMode } from './constants';

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default class Header extends React.PureComponent {
  returnTitle() {
    const { mode, current } = this.props;
    const { year, month, day } = current;
    const monthName = getMonthName(month);
    switch (mode) {
      case yearlyMode:
        return (
          <React.Fragment>
            <span className={styles.thickText}>{year}</span>
          </React.Fragment>
        );
      case monthlyMode:
        return (
          <React.Fragment>
            <span className={styles.thickText}>{monthName}</span>
            &nbsp;
            <span className={styles.thinText}>{year}</span>
          </React.Fragment>
        );
      case dailyMode:
        return (
          <React.Fragment>
            <span className={styles.thickText}>{day}</span>
            &nbsp;
            <span className={styles.thickText}>{monthName}</span>
            &nbsp;
            <span className={styles.thinText}>{year}</span>
            &nbsp;
          </React.Fragment>
        );
    }
  }

  returnButtonText(type) {
    const { mode } = this.props;
    const monthName = getMonthName(type.month);
    switch (mode) {
      case yearlyMode:
        return type.year;
      case monthlyMode:
        return monthName;
      case dailyMode:
        return `${type.day} ${monthName}`;
    }
  }

  render() {
    const { prev, next } = this.props;
    return (
      <div className={styles.calendarHeader}>
        <h5>{this.returnTitle()}</h5>
        <div className={styles.calendarHeaderButtons}>
          <button onClick={this.props.onClickPrev}>
            <AiOutlineLeft></AiOutlineLeft>
            {this.returnButtonText(prev)}
          </button>
          <button onClick={this.props.onClickNext}>
            {this.returnButtonText(next)}
            <AiOutlineRight></AiOutlineRight>

          </button>
        </div>
      </div>
    );
  }
}
