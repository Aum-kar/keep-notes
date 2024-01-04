import React from 'react';
import './stylesheets/note.css'

export default function Note() {
    return (
        <div className='note'>
            <div className='note-details'>
                <div className='note-title'>Title of note</div>
                <div className='note-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, similique? Et repudiandae non soluta molestiae modi delectus facere deserunt dolores culpa explicabo fugiat quidem, corporis neque assumenda nisi adipisci eius.</div>
            </div>
            <br />
            <div className='note-actions'>
                <button id='view'>view</button>
                <button id='delete'>delete</button>
                </div>
        </div>
    );
}
