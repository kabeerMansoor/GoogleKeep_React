import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Notebook from './Notebook';
import Note from './Note';

function App() {

  const [show, updateShow] = useState([]);

  const addNote = (newNote) => {
    updateShow((prev) => {
      return [
        ...prev, newNote
      ];
    });
    console.log(newNote);
  };

  const deleteNote = (id) => {
    updateShow((prev) => {
      return prev.filter((currdata, index) => index !== id);
    });
  };
  

  return (
    <div>
      <Header />
      <Notebook placeNote={addNote} />
      <div className="container mt-4 mb-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {
            show.map((val, index) => (
              <div key={index} className="col">
                <Note id={index} title={val.title} content={val.content} deleteitem={deleteNote}/>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
