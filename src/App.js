import React, { Profiler } from 'react';
import Profilers from './pages/Profiler/Profiler';

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
      <Profiler id="Profilers" onRender={onRender}>
        <Profilers />
      </Profiler>
    </div>
  );
}

export default App;
