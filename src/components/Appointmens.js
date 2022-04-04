import React from 'react';
import { useGlobalContext } from './context';
const Appointmens = () => {
  const { dates, filterID, getArrayElement } = useGlobalContext();
  if (dates) {
    return (
      <>
        {dates.map((appoitments) => {
          const { petName, ownerName, date, hour, symptoms, id } = appoitments;
          return (
            <div className="media mt-3" key={id}>
              <div className="media-body">
                <h3 className="mt-0 text-capitalize">
                  <span className="font-weight-bold">Pet Name:</span> {petName}
                </h3>
                <h3 className="card-text text-capitalize ">
                  <span className="font-weight-bold">Owner Name: </span>{' '}
                  {ownerName}
                </h3>
                <p className="card-text">
                  <span className="font-weight-bold">
                    Date of Appointment:{' '}
                  </span>{' '}
                  {date}
                </p>
                <p className="card-text">
                  <span className="font-weight-bold">
                    Hour of Appointment:{' '}
                  </span>{' '}
                  {hour}
                </p>
                <p className="card-text">
                  <span className="font-weight-bold">Clinic Square: </span>{' '}
                  {symptoms}
                </p>
                <div className="btn-container">
                  <button
                    onClick={() => filterID(id)}
                    className="btn btn-danger"
                  >
                    Erase &times;
                  </button>
                  <button
                    onClick={() => getArrayElement(id)}
                    className="btn btn-primary"
                  >
                    Modify Element
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return <div></div>;
  }
};

export default Appointmens;
