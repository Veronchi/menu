import React from 'react';

const Categories = ({changeCategory}) => {
  return (
    <div className='btn-container'>
      <button type='button' className='filter-btn' onClick={() => changeCategory("all")}>all</button>
      <button type='button' className='filter-btn' onClick={() => changeCategory("breakfast")}>breakfast</button>
      <button type='button' className='filter-btn' onClick={() => changeCategory("lunch")}>lunch</button>
      <button type='button' className='filter-btn' onClick={() => changeCategory("shakes")}>shakes</button>
    </div>
  );
};

export default Categories;
