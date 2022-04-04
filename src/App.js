import React from 'react';
import Header from './components/header';
import Form from './components/AddDate';
import List from './components/List';
import Selected from './components/Selected';
import { useGlobalContext } from './components/context';
function App() {
  const info = { title: 'Pups Patiens' };
  const { promp } = useGlobalContext();
  return (
    <section
      className={`App container ${promp ? 'position-relative before' : ''}`}
    >
      <Header props={info} />
      <div className="row">
        <div className="col-md-6">
          <Form />
        </div>
        <div className="col-md-6">
          <List />
        </div>
      </div>
      {promp && <Selected />}
    </section>
  );
}

export default App;
