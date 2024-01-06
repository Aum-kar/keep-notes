import './App.css';
import { useState } from 'react';

import Header from './compontents/Header';
import CreateContainer from './compontents/CreateContainer';
import Note from './compontents/Note';

function App() {

  const [notesArray, setNotesArray] = useState([]);

  function addNote(newNote) {
    setNotesArray((prevdata) => {
      return [...prevdata, newNote];
    })
  }

  function deleteNote(id) {
    setNotesArray((prevdata) => {
      return prevdata.filter((element, index) => {
        return index !== id;
      });
    });
  }
  
  const showNote = (id) => {
    document.getElementsByClassName("text")[0].value = notesArray[id].text;
    document.getElementsByClassName("title")[0].value = notesArray[id].title;
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <CreateContainer newNote={addNote} />
        
        <div className='notes-container'>
          {notesArray.map((element, index) => {
            return <Note
              key={index}
              id={index}
              notedata={element}
              delete={deleteNote}
              showNote={showNote} />
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
