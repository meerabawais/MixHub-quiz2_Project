import React from 'react';

function Course() {
    // array
  const courses = [
    { title: 'Linear Algebra', level: 'Beginner', duration: '4 weeks' },
    { title: 'Data Structures', level: 'Advanced', duration: '6 weeks' },
    { title: 'React Basics', level: 'Beginner', duration: '4 weeks' },
    { title: 'HTML & CSS', level: 'Intermediate', duration: '3 weeks' },
    { title: 'JavaScript', level: 'Advanced', duration: '6 weeks' },
    { title: 'DataBase', level: 'Beginner', duration: '3 weeks' },
  ];

  return (
    <div> 
   <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
  <h2 style={{ textAlign: 'center', fontSize: '50px' }}>Courses Offered</h2>
  <p style={{ textAlign: 'center' }}>
    Our website provides you with the best React courses designed for beginners to advanced learners.  
    Each course is carefully crafted to help you gain real-world skills and hands-on experience.  
    Start learning today and build your path to becoming a professional React developer.</p>
   
    <div style={{ display: 'flex',flexWrap: 'wrap',justifyContent: 'space-around' }}>
      {courses.map((course, index) => (
        <div key={index} style={{
         border: '2px dashed',
          borderRadius: '10px',
          padding: '16px',
          margin: '10px',
          width: '250px',
          backgroundColor:'aliceblue',
        }}>
          <h3>{course.title}</h3>
          <p><strong>Level:</strong> {course.level}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <button style={{
                marginTop: '10px',
                backgroundColor:'navy',
                color: 'white',
                padding:'10px',
                borderRadius: '5px',
              }}>Register</button>
        </div>
      ))}
    </div>
    </div>
    <footer style={{ backgroundColor:'burlywood',color:'ActiveBorder',textAlign: 'center',
    padding: '15px', marginTop: '60px',position: 'relative',width: '100%'}}>
     © 2025 MixHUB. All rights reserved.
    </footer>
    </div>
  );
}

export default Course;
