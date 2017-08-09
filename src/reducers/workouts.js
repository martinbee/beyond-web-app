import { ADD_WORKOUT } from '../actions/workouts';

export default function workouts(state = [], action) {
  switch (action.type) {
    case ADD_WORKOUT:
      return state.concat(action.workout);
    default:
      return state;
  }
}
