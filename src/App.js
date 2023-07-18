import React, { Profiler } from 'react';
import TextAnalyzer from './pages/TextAnalyzer/TextAnalyzer';

function App(props) {
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    console.log(actualDuration);
    console.log(baseDuration);
  }

  return (
    <div>
      <Profiler id="TextAnalyzer" onRender={onRender}>
        <TextAnalyzer />
      </Profiler>
    </div>
  );
}

export default App;
