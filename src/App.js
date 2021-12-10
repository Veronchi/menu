import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const changeCategory = (categoryType) => {
    if (categoryType === 'all') {
      setMenuItems(items);
    }
    else {
      let neededCategory = items.filter((item) => {
        return item.category === categoryType;
      });

      setMenuItems(neededCategory);
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories changeCategory={changeCategory} />
        <div className='section-center'>
          {menuItems.map((menuItem) => {
            return (
              <Menu key={menuItem.id} {...menuItem} />
            );
          })}
        </div>
      </section>
    </main>
  );

}

export default App;
