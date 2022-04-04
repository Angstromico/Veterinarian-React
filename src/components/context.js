import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();
//Local Storage
const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const AppProvider = ({ children }) => {
  const info = loadJSON('info');
  const [values, setValues] = useState({
    petName: '',
    ownerName: '',
    date: '',
    hour: '',
    symptoms: '',
    id: new Date().getTime(),
  });
  const [alert, setAlert] = useState(false);
  const [dates, setDates] = useState(info ? info : []);
  const createDate = (obj) => {
    saveJSON('info', [...dates, obj]);
    const ourDates = loadJSON('info');
    setDates(ourDates);
  };
  const [message, setMessage] = useState('No Appointments Yet');
  const [promp, setPromp] = useState(false);
  const [selected, setSelected] = useState('');
  const [getId, setGetId] = useState('');
  const filterID = (id) => {
    setGetId(Number(id));
    setPromp(true);
  };
  const [individualElement, setIndividualElement] = useState(false);

  const getArrayElement = (id) => {
    const individual = dates.filter((element) => element.id === id);
    setGetId(id);
    setIndividualElement(individual);
  };
  const modifyElement = () => {
    const { petName, ownerName, date, hour, symptoms, id } = values;
    if (!petName || !ownerName || !date || !hour || !symptoms) {
      setAlert(true);
      return;
    }
    dates.forEach((element, i) => {
      if (element.id === getId) {
        element.petName = petName;
        element.ownerName = ownerName;
        element.date = date;
        element.hour = hour;
        element.symptoms = symptoms;
        element.id = id;
        const elements = {
          petName: element.petName,
          ownerName: element.ownerName,
          date: element.date,
          hour: element.hour,
          id: element.id,
          symptoms: element.symptoms,
        };
        const info = loadJSON('info');
        info[i] = elements;
        saveJSON('info', info);
        const newInfo = loadJSON('info');
        setDates(newInfo);
      }
    });
    setIndividualElement(false);
  };
  useEffect(() => {
    const eraseAlert = setTimeout(() => {
      setAlert(false);
    }, 4000);
    return () => clearTimeout(eraseAlert);
  }, [alert]);

  useEffect(() => {
    const changeMessage = () => {
      if (dates.length === 0) {
        setMessage('No Appointments Yet');
      } else {
        setMessage('Those are our Appointments');
      }
    };
    changeMessage();
  }, [dates]);
  useEffect(() => {
    const choseEliminate = (id) => {
      const filtering = dates.filter((date) => date.id !== id);
      if (selected === 'Yes') {
        saveJSON('info', filtering);
        const newFiltering = loadJSON('info');
        setDates(newFiltering);
        setPromp(false);
        setSelected('');
      }
      if (selected === 'No') {
        setPromp(false);
        setSelected('');
      }
    };
    choseEliminate(getId);
  }, [selected, dates, getId]);
  useEffect(() => {
    const scrollMessage = () => {
      if (promp) {
        try {
          const selectedDialog = document.querySelector('#dialog');
          selectedDialog.scrollIntoView({
            behavior: 'smooth',
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    scrollMessage();
  }, [promp]);
  return (
    <AppContext.Provider
      value={{
        values,
        setValues,
        createDate,
        alert,
        setAlert,
        message,
        dates,
        filterID,
        promp,
        setPromp,
        setSelected,
        individualElement,
        getArrayElement,
        modifyElement,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
