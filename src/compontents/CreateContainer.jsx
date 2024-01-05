import React, { useState } from 'react';
import './stylesheets/createcontainer.css';

export default function CreateContainer(props) {

  const [notedata, setNotedata] = useState({title: "", text: ""});

  function getData(e) {
    setNotedata((prevdata) => {
      return { ...prevdata, [e.target.name]: e.target.value }
    });
  }

  function setData() {
    props.newNote(notedata);
    setNotedata({title: "", text: ""});
  }

  return (
    <div className='create-container'>
      <input type='text'
        name='title'
        className='title'
        value={notedata.title}
        placeholder='Enter title here'
        onChange={getData} />

      <textarea name='text'
        className='text'
        placeholder='write note...'
        value={notedata.text}
        onChange={getData}></textarea>
        
      <button className='add' onClick={setData}>Save</button>
    </div>
  )
}
