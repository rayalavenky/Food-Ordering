
import React from 'react';
import './Starters.css';
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
import s4 from '../images/s4.jpg'
import s5 from '../images/s5.jpg'


const foodItems = [
  {
    id: 1,
    name: 'Chicken Majestic',
    cost: '240',
    image: s1, // Replace with your image path
  },
  {
    id: 2,
    name: 'Chicken Tikka Kabab',
    cost: 250,
    image: s2, // Replace with your image path
  },
  {
    id: 3,
    name: 'Schezwan Lollipop',
    cost: 300,
    image: s3, // Replace with your image path
  },
  {
    id: 4,
    name: 'Veg Kabab',
    cost: '170',
    image: s4, // Replace with your image path
  },
  {
    id: 4,
    name: 'Chilli-paneer',
    cost: '200',
    image: s5, // Replace with your image path
  },
];

const Starters = () => {
  return (
    <div>
      <div className='t1'>
        <h1>Starters:</h1>
        <p>These are the starters available now...</p>
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

export default Starters;
