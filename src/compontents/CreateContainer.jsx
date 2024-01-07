import React, { useState } from 'react';
import './stylesheets/createcontainer.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function CreateContainer(props) {

  const [notedata, setNotedata] = useState({ title: "", text: "" });

  function getData(e) {
    setNotedata((prevdata) => {
      return { ...prevdata, [e.target.name]: e.target.value }
    });
  }

  function setData() {
    props.newNote(notedata);
    setNotedata({ title: "", text: "" });
  }

  // speech to text
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleSpeechToText = () => {
    if (!listening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }

    setNotedata((prevdata) => {
      return {
        ...prevdata,
        text: transcript
      }
    })
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
      <p>{transcript}</p>
      <button onClick={resetTranscript}>reset</button>
      <button className='speech'
        onClick={handleSpeechToText} >
        speech to text: {listening ? 'on' : 'off'}
        {!browserSupportsSpeechRecognition && 'not supported'}
      </button>
      <button className='add' onClick={setData}>Save</button>
    </div>
  )
}
