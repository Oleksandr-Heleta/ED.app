
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CoursesList from './Page/CoursesList';
import Course from './Page/Course';
import Header from './Components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path='/' element={<CoursesList />} />
          <Route exact path='/pages/:page' element={<CoursesList />} />
          <Route exact path='/courses/:id' element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
