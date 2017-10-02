import React from 'react';

const TempCalculatorDisplay = ({
  trainingMax,
  updateState,
  week,
  calculateResults,
  results,
}) => {
  const renderInputs = () => {
    const isTrainingMaxValid = trainingMax > 0;

    return (
      <div>
        <input
          id="trainingMax"
          type="number"
          placeholder="Training Max"
          onChange={updateState}
          value={isTrainingMaxValid ? trainingMax : ''}
        />
        <input
          id="week"
          type="text"
          placeholder="Week"
          onChange={updateState}
          value={week}
        />
        <button onClick={calculateResults}>Calculate</button>
      </div>
    );
  };

  const renderResults = () => (
    results.map(({ key, text, percentage }) => (
      <div key={key}>
        {percentage} {text}
      </div>
    ))
  );

  return (
    <div style={{ marginTop: '20px' }}>
      {renderInputs()}
      <div style={{ textAlign: 'left' }}>
        { results.length > 0 && renderResults() }
      </div>
    </div>
  );
};

export default TempCalculatorDisplay;
