import React, { useState, useEffect } from "react";
import './App.css';
import logo from '../../student/src/assets/images.png';

const App = () => {
  const [counter, setCounter] = useState(8);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="left">
        <img src={logo} alt="" />

        <nav className='vertical'>
          <ul>Student Management</ul>
          <ul>Financial Management</ul>
          <ul>Quality Control</ul>
          <ul>Report</ul>
          <ul>Attendance</ul>
        </nav>
      </div>

      <div className="right">
        <div className="header">
          <h2>Student Management</h2>
        </div>

        <br /><br /><br /><br />

        <div className="top">

          <div className="info">
            <i className="fa-solid fa-user"></i>
            <h1>{counter}</h1>
            <h3>Regular Students</h3>
          </div>

          <div className="info"  style={{backgroundColor:"purple"}}>
            <i className="fa-solid fa-graduation-cap" ></i>
            <h1>{counter}</h1>
            <h3>Remedial Students</h3>
          </div>

          <div className="info" style={{backgroundColor:"green"}}>
          <i class="fa-solid fa-user-check"></i>
            <h1>{counter}</h1>
            <h3>In Paid Clubs</h3>
          </div>

        </div>

        <div className="content">
          <p>Menu</p>
          <div className="menu-grid">
            <div className="menu">
              <i className="fa-solid fa-user"></i>
              <h3>Regular Enrollment</h3>
            </div>

            <div className="menu">
              <i className="fa-solid fa-graduation-cap"></i>
              <h3>Remedial Enrollment</h3>
            </div>

            <div className="menu">
           <i class="fa-solid fa-user-check"></i>
              <h3>Club Management</h3>
            </div>

            <div className="menu">
              <i className="fa-solid fa-chalkboard-teacher"></i>
              <h3>Classroom Management</h3>
            </div>

            <div className="menu">
              <i className="fa-solid fa-envelope"></i>
              <h3>SMS / EMAIL</h3>
            </div>

            <div className="menu">
              <i className="fa-solid fa-check-circle"></i>
              <h3>Attendance</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
