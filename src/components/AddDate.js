import React from 'react';
import { useGlobalContext } from './context';
const AddDate = () => {
  const {
    values,
    setValues,
    createDate,
    alert,
    setAlert,
    individualElement,
    modifyElement,
  } = useGlobalContext();
  const { petName, ownerName, date, hour, symptoms } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!petName || !ownerName || !date || !hour || !symptoms) {
      setAlert(true);
      return;
    }
    const newDate = new Date().getTime();
    createDate(values);

    setValues({
      petName: '',
      ownerName: '',
      date: '',
      hour: '',
      symptoms: '',
      id: newDate,
    });
  };
  let today = new Date();
  today = new Date(today.setDate(today.getDate() + 2))
    .toISOString()
    .split('T')[0];
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title mb-5 text-center">Add Dates</h2>
        <form onSubmit={individualElement ? modifyElement : handleSubmit}>
          <div className="form-group row">
            <label className="d-block col-form-label" htmlFor="petName">
              Pet Name
            </label>
            <div className="d-block w-100 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Pet Name"
                value={petName}
                onChange={(e) =>
                  setValues({ ...values, petName: e.target.value })
                }
                id="petName"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="d-block col-form-label">Name Owner</label>
            <div className="d-block w-100 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Dueño de la Mascota"
                value={ownerName}
                onChange={(e) =>
                  setValues({ ...values, ownerName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="d-block w-90 col-form-label">Date</label>
            <div className="d-block w-90   mb-4 ">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setValues({ ...values, date: e.target.value })}
                min={today}
              />
            </div>

            <label className="d-block col-form-label">Hour</label>
            <div className="d-block w-100 mb-4">
              <input
                type="time"
                className="form-control"
                value={hour}
                onChange={(e) => setValues({ ...values, hour: e.target.value })}
                min="09:00"
                max="18:00"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="d-block col-form-label">Symptoms</label>
            <div className="d-block w-100 mb-4">
              <textarea
                className="form-control"
                value={symptoms}
                onChange={(e) =>
                  setValues({ ...values, symptoms: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="form-group row justify-content-end">
            <div>
              <button type="submit" className="btn btn-success d-block w-100">
                {individualElement
                  ? `Modify the Pet ${individualElement[0].petName}`
                  : 'Date'}
              </button>
            </div>
          </div>
          {alert && (
            <div className="alert alert-danger mt-4 fade-out" role="alert">
              <h3 className="text-center">You Must Fill All the Fields</h3>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddDate;
