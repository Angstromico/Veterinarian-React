import React from 'react';
import { useGlobalContext } from './context';
const Selected = () => {
  const { setSelected } = useGlobalContext();
  return (
    <div
      id="dialog"
      className="dialog p-2 position-absolute top-50 start-50 translate-middle rounded w-100 z-index"
    >
      <h3 className="text-center my-3 py-3 text-alert">
        Are you sure you Wanna Eliminate this Information?
      </h3>
      <div className="btn-container">
        <button className="btn btn-danger" onClick={() => setSelected('Yes')}>
          Erase
        </button>
        <button className="btn btn-success" onClick={() => setSelected('No')}>
          Preserve
        </button>
      </div>
    </div>
  );
};

export default Selected;
