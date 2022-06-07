import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function EditarImovel() {
  const {id} = useParams();

  useEffect(() =>{
    
  }, [])
  return (
    <div>EditarImovel {id}</div>
  )
}
