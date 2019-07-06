import React from 'react'

import { ToDoProvider } from './stores/todo'

import ToDoTemplate from './components/templates/todo'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <ToDoProvider>
      <ToDoTemplate />
    </ToDoProvider>
  )
}

export default App
