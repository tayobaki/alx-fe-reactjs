import React, { useState, useEffect } from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginLeft: '4rem'
    }}>
      <RegistrationForm />
      <FormikForm />
    </div>
  )
}

export default App
