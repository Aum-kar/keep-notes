import React from 'react';
import './stylesheets/createcontainer.css';

export default function CreateContainer() {
  return (
    <div className='create-container'>
      <input type='text' name='title' className='title' placeholder='Enter title here'/>
      <textarea name='text' className='text' placeholder='write note...'></textarea>
      <button className='add'>Save</button>
    </div>
  )
}
