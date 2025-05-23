import React from 'react'

export default function Details({credentials}) {
    const {firstName,lastName,userName,email,phoneNo,countryCode,country,city,panNo,adhaarNo} = credentials
  return (
    <div className='flex justify-center min-h-screen items-center'>
        <div className='flex gap-4 flex-col border-2 rounded-md px-8 py-6 md:min-w-96'>
            <div className='flex gap-2'>
                <h2 className='font-bold'>Name -</h2>
                <p>{firstName + " " + lastName}</p>
            </div>
            <div className='flex gap-2'>
                <h2 className='font-bold'>UserName -</h2>
                <p>{userName}</p>
            </div>
            <div className='flex gap-2'>
                <h2 className='font-bold'>E-mail -</h2>
                <p>{email}</p>
            </div>
            <div className='flex gap-2'>
                <h2 className='font-bold'>Phone No. -</h2>
                <p>{countryCode +" " +phoneNo}</p>
            </div>
            <div className='flex gap-2'>
                <h2 className='font-bold'>Country -</h2>
                <p>{country}</p>
            </div>
            <div className='flex gap-2'>
                <h2 className='font-bold'>City -</h2>
                <p>{city}</p>
            </div>
            <div className='flex gap-2'>
                <h2 className='font-bold'>Pan Number -</h2>
                <p>{panNo}</p>
            </div>
            <div className='flex gap-2'>
                <h2 className='font-bold'>Adhaar Number -</h2>
                <p>{adhaarNo}</p>
            </div>

        </div>
      
    </div>
  )
}
