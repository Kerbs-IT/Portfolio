import React from 'react'

function LanguageUsed(props) {
  return (
    <div key={props.name} className='border border-black px-2 py-1 geist-font bg-white rounded fw-bold'>
      {props.name}
    </div>
  )
}

export default LanguageUsed
