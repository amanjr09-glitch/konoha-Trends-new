
import React from 'react';
import '../sass/components/Categories.scss';
import CardItem from './CardItem';


function Categories() {
  return (
    <div className='cards'>
      <h1>CATEGORIES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14.webp'
              label='High'
              path='/catalog'
            />
            <CardItem
              src='images/img-14.webp'
              label='Casuals'
              path='/catalog'
            />
            <CardItem
              src='images/img-15.webp'
              text=''
              label='Gaming'
              path='/catalog'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-17.png'
              text=''
              label='Superhero'
              path='/services'
            />
            <CardItem
              src='images/img-15.webp'
              text=''
              label='Sports'
              path='/products'
            />
            <CardItem
              src='images/img-16.png'
              text=''
              label='Anime'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
