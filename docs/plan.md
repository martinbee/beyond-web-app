# DEVELOPMENT PLAN

## Must haves
- Ability to select workout type
  - squat
  - bench press
  - deadlift
  - barbell press
- Ability to track which week it is
  - Is it week 1, 2, or 3 of the cycle
  - Should be editable
- Ability to add training max(TM)
  - Should carry over to future workouts
  - Should be editable
- TM should determine workout weight
  - Using TM and the workout week, determine how lift weights automatically

## Nice to haves
- Joker sets built in based on TM
  - Should be able to pick a percentage and add a set
- Assistance work
  - Ability to pick assistance workouts and track progress
- A built in rest timer with alerts


## Tools
- React
- React Router
- Redux
- Local Storage

## Plan
- Main menu where you can add new workouts
  - Upon clicking add new, should ask for:
    - TM or to verify old TM
    - Type of workout, should assume based on array but can be editable
    - Week #
