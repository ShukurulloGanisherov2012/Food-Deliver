import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';
import './css/Food.css';

export default function Food({ category }) {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food' id='food'>
            <h2>Top dishes near you</h2>
            <div className="food-list">
                {food_list.map((item) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={item.id}  // Unique key based on item.id
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
