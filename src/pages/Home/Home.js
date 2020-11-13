import React from 'react';
import { Notes } from '../../components/Notes/Notes';

export const Home = () => {

  const notes = [
    {id:0, title: 'react'},
    {id:1, title: 'vue'}
  ]
  return (
    <>
      <section>
        <div className="container">
          <div className="section__wrap">
            <h1>Home</h1>
            <hr/>
            <Notes notes={notes}/>
          </div>
        </div>
      </section>
    </>
  )
}