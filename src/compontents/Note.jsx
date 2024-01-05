import React from 'react';

// material icons
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

import './stylesheets/note.css'

export default function Note(prop) {
    return (
        <div className='note'>
            <div className='note-details'>
                <div className='note-title'>{prop.notedata.title}</div>
                <div className='note-text'>{prop.notedata.text}</div>
            </div>
            <br />
            <div className='note-actions'>
                <button id='view'><VisibilityIcon fontSize='small' /></button>
                <button id='delete' onClick={() => prop.delete(prop.id)}><DeleteIcon fontSize='small' /></button>
                </div>
        </div>
    );
}
