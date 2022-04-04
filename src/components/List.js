import React from 'react';
import { useGlobalContext } from './context';
import Appointmens from './Appointmens';
const List = () => {
  const { message } = useGlobalContext();
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center">{message}</h2>
        <div className="lista-cita">
          <Appointmens />
        </div>
      </div>
    </div>
  );
};

export default List;
