import React from 'react';

const Categories = () => {
  return (
    <div className='btn-container'>
      <button type='button' className='filter-btn'>all</button>
      <button type='button' className='filter-btn'>breakfast</button>
      <button type='button' className='filter-btn'>lunch</button>
      <button type='button' className='filter-btn'>shakes</button>
    </div>
  );
};

export default Categories;
