import React from 'react';
import { number } from 'prop-types';

import Display from './Display';

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

const Workout = (props) => {
  const weekAndLiftDropdownConfig = weekAndLiftDropdown.map(config => ({
    ...config,
    onChange: selection => console.log(selection),
    value: props[config.id],
  }));

  const trainingMaxInputConfig = {
    ...trainingMaxInput,
    onChange: evt => console.log(evt.target.value),
    value: props.trainingMax,
  };

  return (
    <Display
      weekAndLiftDropdownConfig={weekAndLiftDropdownConfig}
      trainingMaxInputConfig={trainingMaxInputConfig}
    />
  );
};

Workout.propTypes = {
  trainingMax: number.isRequired,
};

export default Workout;
