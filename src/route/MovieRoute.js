import React from 'react'
import CreateMovie from '../components/CreateMovie';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
export default function MovieRoute() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/getmovie" element={<CreateMovie/>} />
        
        </Routes>
        
      </Router>
        

    </div>
  )
}
