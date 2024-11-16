
import './App.css';
import React, { useEffect,useState } from 'react';
import dayjs from 'dayjs';

function App() {

  const [data,setData] =  useState([])

  const getData = () =>{
    fetch("/api/data")
    .then(res => res.json())
    .then(json=> setData(json)
    )
  }

  useEffect(()=>{
 getData()
  },[])
  return (
    <div className='container' >
     <div className='header'>
      <span className='left'>My Course</span>
      <span className='right'>View All</span>
     </div>

      <table className='course-table'> 
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lesson Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr key={value.id}>
              <td>
                <span className="course-icon">{value.name}</span>
                {value.name} ({value.lessons} Lessons)
              </td>
              <td>{dayjs(value.startDate).format('DD MMM, YYYY')}</td>

              <td>
                {value.completedLessons}/{value.lessons} (
                {Math.floor((value.completedLessons / value.lessons) * 100)}%)
              </td>
              <td>{value.duration}</td>
            </tr>
          ))}
        </tbody>

   </table>
    </div>
  );
}

export default App;
