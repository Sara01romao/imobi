import React from 'react'

export function Input({type, id, value, setChange}) {
  return (
    
    
      <input type={type} id={id} value={value} onChange={e => setChange(e.target.value)} />
    
    
  )
}
