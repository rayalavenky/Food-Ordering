
import React from 'react';
import './CoolDrinks.css';
import f5 from '../images/f5.jpg';
import f6 from '../images/f6.jpg';
import f7 from '../images/f7.jpg';
import f14 from '../images/f14.jpg';
import f15 from '../images/f15.jpg';
import f16 from '../images/f16.jpg';


const foodItems = [
  {
    id: 1,
    name: 'Orange Juice',
    cost: '50',
    image: f5, // Replace with your image path
  },
  {
    id: 2,
    name: 'Milk Shake',
    cost: '90',
    image: f6, // Replace with your image path
  },
  {
    id: 3,
    name: 'Quick Gingerbread',
    cost: '120',
    image: f7, // Replace with your image path
  },
  {
    id: 4,
    name: 'Mint Lemonade',
    cost: '150',
    image: f14, // Replace with your image path
  },
  {
    id: 5,
    name: 'Chia Fresca',
    cost: '90',
    image: f15, // Replace with your image path
  },
  {
    id: 6,
    name: 'Raspberry Iced Tea',
    cost: '90',
    image: f16, // Replace with your image path
  },
];

const CoolDrinks = () => {
  return (
    <div>
      <div className='t1'>
        <h1>Drinks:</h1>
        <p>These are the Drinks available now...</p>
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

export default CoolDrinks;
