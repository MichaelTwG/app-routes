import React from 'react'

export function Properties(dict) {
  return (
    <div className='properties' onLoad={() => {
      for (key in dict) {
        <h4 className='property_data'>key: {dict[key]}</h4>
      }
    }}>
    </div>
  )
}