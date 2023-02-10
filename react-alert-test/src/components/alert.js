import React from 'react';
import Properties from './properties';

export const Alert = () => {
  return (
    <div className='alert'>
        <h3 className='alertName'></h3>
        <h4>Group: <span className='gameName'></span></h4>

        <Properties key={dict.properties}></Properties>

        <h4>: <span className='memberList'></span></h4>
    </div>
  )
}
