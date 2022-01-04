import React from 'react';



const Particular = ({ title, age, gender, sn, onRemove,onEdit}) => {
    return (
      <div className="students">
        <span>{sn}</span>
        <div className="student-name">
          <span>{title}</span>
        </div>
        <div className="student-gender">
          <span>{age}</span>
        </div>
        <div className="student-age">
          <span>{gender}</span>
        </div>
        <button
          onClick={ e => onEdit(e,title)}
        ><span>edit</span></button>
  
        <button
          onClick={ e => onRemove(e,title)}
        ><span>Y</span></button>
      </div >
    );
  };

  export default Particular;