import React from 'react'

export default function Input({field, name,handleChange,errors,details}) {
  return (
    <label htmlFor={field}>
        <p className='font-bold'>{name}</p>
        <input 
        id={field}
        className='px-2 border-2 rounded-md w-full'
        type={field === 'email' ? 'email' : 'text'}
        name={field}
        value={details[field] || ''}
        onChange={handleChange}
        />
        {errors[field] && <p className='text-red-500 text-sm'>{errors[field]}</p>}
    </label>
  )
}
