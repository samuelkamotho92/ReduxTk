import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/counter'
import Auth from './features/authentication/Auth'
function App() {

  return (
   <div>
<Auth />
<Counter />
   </div>
  )
}

export default App
