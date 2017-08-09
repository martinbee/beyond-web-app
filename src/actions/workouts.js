export const ADD_WORKOUT = 'ADD_WORKOUT';

export function addWorkout(workout) {
  return { type: ADD_WORKOUT, workout };
}
