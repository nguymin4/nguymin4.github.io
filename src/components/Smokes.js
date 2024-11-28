import React, { useEffect, useState } from 'react';
import debounce from 'debounce';

const SMOKE_WIDTH = 574;

function Smokes() {
  const [numberOfSmokes, setNumberOfSmokes] = useState(0);
  const update = debounce(() => {
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
      {Array.from({ length: numberOfSmokes }, (_v, i) => {
        const key = `${numberOfSmokes}_${i}`;
        const left = `${i * SMOKE_WIDTH * 2}px`;
        return (<div key={key} className="smoke" style={{ left }} />);
      })}
    </div>
  );
}

export default Smokes;
