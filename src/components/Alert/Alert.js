import React from 'react'
import './Alert.css'

export const Alert = ({alert}) => {
  if(!alert) return null;
  return (
    <div className={`alert__wrap alert--${alert.type || 'warning'}`}>
      <h2>Attention</h2>
      <p className="alert__txt">{alert.text}</p>
      <button className="btn-delete">&times;</button>
    </div>
  );
}