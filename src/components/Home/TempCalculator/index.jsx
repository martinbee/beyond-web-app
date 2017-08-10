import React, { Component } from 'react';

import Display from './Display';
import calculatePercentages from '../../utilities/calculatePercentages';

export default class TempCalculator extends Component {
  state = { trainingMax: 0, week: '', results: [] };

  updateState = (evt) => {
    const { id, value } = evt.target;

    this.setState({ [id]: value });
  }

  calculateResults = () => {
    const { trainingMax, week } = this.state;

    const isValidWeek = !week || (week > 0 && week <= 3);
    const isValidTrainingMax = trainingMax > 0;

    if (isValidTrainingMax && isValidWeek) {
      this.setState({ results: calculatePercentages(trainingMax, week) });
    } else {
      alert('Invalid values for training max and week');
    }
  }

  render() {
    const { trainingMax, week, results } = this.state;

    return (
      <Display
        updateState={this.updateState}
        trainingMax={trainingMax}
        week={week}
        calculateResults={this.calculateResults}
        results={results}
      />
    );
  }
}
