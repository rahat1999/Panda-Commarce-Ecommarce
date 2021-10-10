import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Meals from '../meals/Meals';
import './Resturent.css'

const Resturent = () => {
    const [foods, setFoods] = useState([])
    const [order, setOrder] = useState([])
    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals)
                setOrder(data.meals)
                // set(data.meals)
            })
    }, [])

    // button handale
    const [carts, setCart] = useState([])
    const handaleBtn = (item) => {
        const newMeals = [...carts, item];
        setCart(newMeals)
    }

    // const [get, set] = useState([])
    // console.log(get)

    //input box
    const handelInput = event => {
        const searchText = (event.target.value);
        // set(searchText)
        const searcRresult = foods.filter(mel => mel.strMeal.includes(searchText));
        setOrder(searcRresult);
        console.log(searcRresult.length)
    }


    return (
        <div className="main-div">
            <div className="input-filed">
                <input onChange={handelInput} type="text" placeholder="Search Meals" />
                <span style={{ color: 'white', marginLeft: '10px' }}>Total: <b>{foods.length}</b></span>
            </div>
            <div className="row container">
                <div className="col col-md-9">
                    {
                        order.map(food => <Meals
                            handaleBtn={handaleBtn}
                            key={food.idMeal}
                            food={food}
                        ></Meals>)
                    }
                </div>

                <div className='col col-md-3 main-div' style={{ lineHeight: '5px' }}>
                    <div className=" cart bg-dark text-white position-fixed w-25">
                        <h4 style={{
                            textAlign: 'center',
                            padding: '5px',
                            background: 'gray'
                        }}>Order: {carts.length}</h4>

                        {
                            carts.map(cart => <Cart key={cart.idMeal} cart={cart}></Cart>)

                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Resturent;