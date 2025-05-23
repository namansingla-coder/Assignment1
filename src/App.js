import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Details from './Details'
function App (){
    const [credentials,setCredentials] = useState({})
    const handleCredentials = (details) => {
      setCredentials({...details})
    }
    return (
      <>
        <Routes>
          <Route path='/' element={<Login handleCredentials={handleCredentials}/>} />
          <Route path='/post-submission' element={<Details credentials={credentials}/>}/>
        </Routes>

      </>
    )
  }

export default App
