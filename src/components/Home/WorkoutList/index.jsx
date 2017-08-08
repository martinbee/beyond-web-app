import React from 'react';

import { coreLifts, weekNumbers } from '../../../constants/';
import Workout from './Workout';

const trainingMaxes = {
  press: 120,
  deadLift: 225,
  bench: 190,
  squat: 180,
};

const workouts = [
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

const increaseTrainingMax = () => {
  const { press, deadLift, bench, squat } = trainingMaxes;

  trainingMaxes.press = press + 5;
  trainingMaxes.bench = bench + 5;
  trainingMaxes.deadLift = deadLift + 10;
  trainingMaxes.squat = squat + 10;
};

// trainingMax must be the last value stored for that lift not just last workout
const getTrainingMax = (isLastWeekOfCycle, isLastLift, newCoreLift) => {
  const isTimeToIncreaseTrainingMax = isLastWeekOfCycle && isLastLift;

  if (isTimeToIncreaseTrainingMax) increaseTrainingMax();

  return trainingMaxes[newCoreLift];
};

const getWeekNumber = (isLastWeekOfCycle, isLastLift, lastWeekNumberIndex) => {
  if (isLastLift && isLastWeekOfCycle) return weekNumbers[0];
  if (isLastLift) return weekNumbers[lastWeekNumberIndex + 1];

  return weekNumbers[lastWeekNumberIndex];
};

const getCoreLift = (isLastLift, lastLiftIndex) => {
  if (isLastLift) return coreLifts[0];

  return coreLifts[lastLiftIndex + 1];
};

const WorkoutList = () => {
  const renderWorkouts = () => (
    workouts.map(workout => (
      <Workout {...workout} trainingMax={trainingMaxes[workout.coreLift]} />
    ))
  );

  // ripe for refactoring into methods
  const addWorkout = () => {
    const lastWorkout = workouts[workouts.length - 1];
    const { coreLift, weekNumber } = lastWorkout;

    const lastLiftIndex = coreLifts.indexOf(coreLift);
    const isLastLift = lastLiftIndex === coreLifts.length - 1;

    const lastWeekNumberIndex = weekNumbers.indexOf(weekNumber);
    const isLastWeekOfCycle = lastWeekNumberIndex === weekNumbers.length - 1;

    const newCoreLift = getCoreLift(isLastLift, lastLiftIndex);
    const newTrainingMax = getTrainingMax(isLastWeekOfCycle, isLastLift, newCoreLift);
    const newWeekNumber = getWeekNumber(isLastWeekOfCycle, isLastLift, lastWeekNumberIndex);

    const newWorkout = {
      trainingMax: newTrainingMax,
      coreLift: newCoreLift,
      weekNumber: newWeekNumber,
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
