
import React from 'react';
import './Pizza.css';
import f3 from '../images/f3.jpg';
import f4 from '../images/f4.jpg';
import f11 from '../images/f11.jpg';
import f12 from '../images/f12.jpg';
import f13 from '../images/f13.jpg';

const foodItems = [
  {
    id: 1,
    name: 'Cheese Pizza',
    cost: '270',
    image: f3, // Replace with your image path
  },
  {
    id: 2,
    name: 'Chicken Pizza',
    cost: '350',
    image: f4, // Replace with your image path
  },
  {
    id: 3,
    name: 'Veg Pizza',
    cost: '120',
    image: f11, // Replace with your image path
  },
  {
    id: 4,
    name: 'Mix Pizza',
    cost: '220',
    image: f12, // Replace with your image path
  },
  {
    id: 5,
    name: 'Pesto pizza',
    cost: '250',
    image: f13, // Replace with your image path
  },
];

const Pizza = () => {
  return (
    <div>
        <div className='t1'>
        <h1>Pizza:</h1>
        <p>These are the Pizzas available now...</p>
      </div>
    <div className="food-page">
      {foodItems.map((item) => (
        <div className="food-block" key={item.id}>
          <img src={item.image} alt={item.name} className="food-image" />
          <h2>{item.name}</h2>
          <p>{item.cost}</p>
          <a href='/orders'>
          <button className="order-button">Order Now</button>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Pizza;
