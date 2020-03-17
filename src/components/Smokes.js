import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const SMOKE_WIDTH = 574;

const Smokes = () => {
  const [numberOfSmokes, setNumberOfSmokes] = useState(0);
  const update = _.debounce(() => {
    const { innerWidth } = window;
    const newNumberOfSmokes = Math.ceil(innerWidth / SMOKE_WIDTH) + 1;
    setNumberOfSmokes(newNumberOfSmokes);
  }, 200);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div id="smokes">
      {_.range(numberOfSmokes).map((i) => {
        const left = `${i * SMOKE_WIDTH * 2}px`;
        return (<div key={_.uniqueId()} className="smoke" style={{ left }} />);
      })}
    </div>
  );
};

export default Smokes;
