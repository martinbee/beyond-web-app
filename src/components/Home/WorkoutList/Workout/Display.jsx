import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import Select from 'react-select';

import './workout.css';

const Workout = ({ weekAndLiftDropdownConfig, trainingMaxInputConfig }) => {
  const renderTrainingMax = () => (
    <input className="training-max-input" {...trainingMaxInputConfig} />
  );

  const renderWeekAndLiftDropdowns = () => (
    weekAndLiftDropdownConfig.map(({ id, ...rest }) => (
      <div key={id} className="week-lift-dropdown">
        <Select
          clearable={false}
          searchable={false}
          {...rest}
        />
      </div>
    ))
  );

  return (
    <div className="workout-container">
      {renderTrainingMax()}
      {renderWeekAndLiftDropdowns()}
    </div>
  );
};

Workout.propTypes = {
  weekAndLiftDropdownConfig: arrayOf(
    shape({
      id: string.isRequired,
      onChange: func.isRequired,
      options: arrayOf(
        shape({
          value: string.isRequired,
          label: string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  trainingMaxInputConfig: shape({
    id: string.isRequired,
    type: string.isRequired,
    onChange: func.isRequired,
  }),
};

export default Workout;
