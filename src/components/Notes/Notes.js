import React from 'react';
import './Notes.css';

export const Notes = ({notes}) => {
  return (
    <ul className="notes__list">
      {
        notes.map(note => {
          return <li 
            className="notes__item"
            key={note.id}>
              <div>
                <strong>{note.title} </strong>
                <span> {new Date().toLocaleDateString()}</span>
              </div>
              <button className="btn-delete">&times;</button>
            </li>
        })
      }
    </ul>
  )
}