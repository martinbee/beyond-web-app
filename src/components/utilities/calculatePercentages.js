const weekPercentages = [
  [65, 75, 85],
  [70, 80, 90],
  [75, 85, 95],
];

const weekText = [
  ['5', '5', '5+'],
  ['3', '3', '3+'],
  ['5', '3', '1+'],
];

const getPercentage = (value, percentage) => (value / 100) * percentage;

const getCoreSetText = (week, index) => weekText[week - 1][index];

const getCorePercentages = (trainingMax, week) => {
  const percentages = weekPercentages[week - 1];

  const corePercentages = percentages.map(percentage => (
    getPercentage(trainingMax, percentage)
  ));

  return corePercentages;
};

const getWarmUpPercentages = (corePercentages, trainingMax) => {
  const tenPercentOfTrainingMax = getPercentage(trainingMax, 10);
  const lowestWeight = corePercentages[0];

  const warmUpSets = 3;
  const warmUpPercentages = [];

  for (let i = 0; i < warmUpSets; i += 1) {
    const newLowestLift = warmUpPercentages[0] || lowestWeight;
    const warmUpPercentage = newLowestLift - tenPercentOfTrainingMax;

    warmUpPercentages.unshift(warmUpPercentage);
  }

  return warmUpPercentages;
};

const getJokerPercentages = (highestCoreLift) => {
  const jokerSets = 2;
  const jokerPercentages = [];

  for (let i = 0; i < jokerSets; i += 1) {
    const newHighestLift = jokerPercentages[jokerPercentages.length - 1] || highestCoreLift;
    const jokerPercentage = newHighestLift + getPercentage(newHighestLift, 10);

    jokerPercentages.push(jokerPercentage);
  }

  return jokerPercentages;
};

export default function calculatePercentages(trainingMax, week) {
  const corePercentages = getCorePercentages(trainingMax, week);
  const warmUpPercentages = getWarmUpPercentages(corePercentages, trainingMax);

  // determine percentages
  const highestCoreLift = corePercentages[corePercentages.length - 1];
  const jokerPercentages = getJokerPercentages(highestCoreLift);
  const firstSetLastPercentage = corePercentages[0];

  // determine sets/reps/words
  const warmUpSets = warmUpPercentages.map((percentage, index) => ({
    key: `wm${index}`,
    text: '3-5 reps',
    percentage,
  }));

  const coreSets = corePercentages.map((percentage, index) => ({
    key: `cs${index}`,
    text: getCoreSetText(week, index),
    percentage,
  }));

  const jokerSets = jokerPercentages.map((percentage, index) => ({
    key: `jk${index}`,
    text: 'Reps depend on how you feel',
    percentage,
  }));

  const firstSetLastSet = {
    key: 'fsl',
    text: '3-5 reps and 3-5 sets',
    percentage: firstSetLastPercentage,
  };

  return [
    ...warmUpSets,
    ...coreSets,
    ...jokerSets,
    firstSetLastSet,
  ];
}
