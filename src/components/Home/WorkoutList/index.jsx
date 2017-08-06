import React from 'react';

import Workout from './Workout';

const workouts = [
  {
    trainingMax: '190',
    weekNumber: '1',
    coreLift: 'press',
  },
  {
    trainingMax: '190',
    weekNumber: '1',
    coreLift: 'deadLift',
  },
  {
    trainingMax: '190',
    weekNumber: '1',
    coreLift: 'bench',
  },
];

const coreLifts = ['press', 'deadLift', 'bench', 'squat'];
const weekNumbers = ['1', '2', '3'];

const WorkoutList = () => {
  const renderWorkouts = () => (
    workouts.map(Workout)
  );

  const addWorkout = () => {
    const lastWorkout = workouts[workouts.length - 1];
    const lastCoreLift = coreLifts.indexOf(lastWorkout.coreLift);
    const lastTrainingMax = lastWorkout.trainingMax;
    const lastWeekNumber = weekNumbers.indexOf(lastWorkout.weekNumber);

    const nextCoreLift = coreLifts[lastCoreLift + 1] || coreLifts[0];

    let nextWeekNumber = lastWeekNumber;

    if (lastCoreLift === coreLifts.length) {
      if (lastWeekNumber !== -1) {
        nextWeekNumber = weekNumbers[lastWeekNumber + 1];
      } else {
        nextWeekNumber = weekNumbers[0];
      }
    }

    const newWorkout = {
      trainingMax: lastTrainingMax,
      coreLift: nextCoreLift,
      weekNumber: nextWeekNumber,
    };

    workouts.push(newWorkout);
    console.log(workouts);
  };

  const renderAddWorkout = () => (
    <button onClick={addWorkout}>
      + Workout
    </button>
  );

  return (
    <div>
      <h3>Workouts</h3>
      <ul>
        {renderWorkouts()}
      </ul>
      {renderAddWorkout()}
    </div>
  );
};

export default WorkoutList;
