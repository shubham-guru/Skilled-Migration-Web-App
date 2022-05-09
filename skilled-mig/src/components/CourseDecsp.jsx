import React from 'react';

const CourseDecsp = (props) => {
  return (
    <div className='courseDescp'>
        <div>
            <img src={props.src}  alt="course_image"/>
            <h4>{props.head}</h4>
            <p style={{color: "#777"}}>{props.author}</p>
            <p><b>{props.price}</b></p>
        </div>
    </div>
  )
}

export default CourseDecsp