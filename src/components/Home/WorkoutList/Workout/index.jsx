import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addWorkout } from '../../../../actions/workouts';
import { number, func } from 'prop-types';

import Display from './Display';

const stubWorkouts = [
  {
    weekNumber: '1',
    coreLift: 'press',
  },
  {
    weekNumber: '1',
    coreLift: 'deadLift',
  },
  {
    weekNumber: '1',
    coreLift: 'bench',
  },
];

const weekAndLiftDropdown = [
  {
    id: 'weekNumber',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
  },
  {
    id: 'coreLift',
    options: [
      { value: 'squat', label: 'Squat' },
      { value: 'press', label: 'Barbell Press' },
      { value: 'bench', label: 'Bench Press' },
      { value: 'deadlift', label: 'Deadlift' },
    ],
  },
];

const trainingMaxInput = {
  id: 'trainingMax',
  type: 'text',
};

const getActions = dispatch => ({
  setIntitialWorkouts: workouts => dispatch(addWorkout(workouts)),
});

class Workout extends Component {
  componentDidMount() {
    this.props.setIntitialWorkouts(stubWorkouts);
  }

  getWeekAndLiftDropdownConfig() {
    return weekAndLiftDropdown.map(config => ({
      ...config,
      onChange: selection => console.log(selection),
      value: this.props[config.id],
    }));
  }

  getTrainingMaxInputConfig() {
    return ({
      ...trainingMaxInput,
      onChange: evt => console.log(evt.target.value),
      value: this.props.trainingMax,
    });
  }

  render() {
    // check for local storage data, if none, modal or prompt for info, else
    // workouts. Spinner while waiting
    const weekAndLiftDropdownConfig = this.getWeekAndLiftDropdownConfig();
    const trainingMaxInputConfig = this.getTrainingMaxInputConfig();

    return (
      <Display
        weekAndLiftDropdownConfig={weekAndLiftDropdownConfig}
        trainingMaxInputConfig={trainingMaxInputConfig}
      />
    );
  }
}

Workout.propTypes = {
  setIntitialWorkouts: func.isRequired,
};


export default connect(null, getActions)(Workout);
