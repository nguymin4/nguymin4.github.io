import React from 'react';
import _ from 'lodash';

const Smokes = () => (
  <div id="smokes">
    {_.range(4).map((i) => (
      <div key={i} className="smoke" style={{ left: `${i * 574 * 2}px` }} />
    ))}
  </div>
);

export default Smokes;
