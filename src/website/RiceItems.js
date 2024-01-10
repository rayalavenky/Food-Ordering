
import React from 'react';
import './RiceItems.css';
import f2 from'../images/f2.jpg'
import f8 from '../images/f8.jpg'
import f9 from '../images/f9.jpg'
import f10 from '../images/f10.JPG'
import sambar from '../images/sambar.jpg'
import curd from '../images/curd.jpg'
import fried from '../images/fried.jpg'


const foodItems = [
  {
    id: 1,
    name: 'Dum Biryani',
    cost: '250',
    image:f2, // Replace with your image path
  },
  {
    id: 2,
    name: 'Prawn Biryani',
    cost: '300',
    image: f8, // Replace with your image path
  },
  {
    id: 3,
    name: 'Crab Biryani',
    cost: '350',
    image: f9, // Replace with your image path
  },
  {
    id: 4,
    name: 'Fish Biryani',
    cost: '299',
    image: f10, // Replace with your image path
  },
  {
    id: 5,
    name: 'Sambar Rice',
    cost: '150',
    image: sambar, // Replace with your image path
  },
  {
    id: 6,
    name: 'Fried Rice',
    cost: '100',
    image: fried, // Replace with your image path
  },
  {
    id: 7,
    name: 'Curd Rice',
    cost: '150',
    image: curd, // Replace with your image path
  },
];

const RiceItems = () => {
  return (
    <div>
      <div className='t1'>
        <h1>Rice Items:</h1>
        <p>These are the Rice Items available now...</p>
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

export default RiceItems;
