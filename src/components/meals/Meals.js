import React from 'react';
// import './Meals.css'

const Meals = (props) => {
    // console.log(props.food)
    const { strMeal, strCategory, strMealThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6 } = props.food;
    return (
        <div className="container">
            <div className="card m-3 bg-dark border-2 border-warning shadow-lg" style={{ maxWidth: ' 100%' }}>
                <div className="row m-1 text-white rounded">
                    <div className="col-md-4 p-0">
                        <img src={strMealThumb} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{strCategory}e</h5>
                            <p className="card-text">{strInstructions.slice(0, 80)}</p>
                            <div className='d-flex lh-1'>
                                <div>
                                    <p><small>-{strIngredient1}</small></p>
                                    <p><small>-{strIngredient2}</small></p>
                                    <p><small>-{strIngredient3}</small></p>
                                </div>
                                <div className=" ms-5">
                                    <p><small>-{strIngredient4}</small></p>
                                    <p><small>-{strIngredient5}</small></p>
                                    <p><small>-{strIngredient6}</small></p>

                                </div>
                            </div>
                            <p className="card-text"><b>{strMeal}</b></p>
                            <button
                                type='btn'
                                className="btn btn-outline-warning"
                                onClick={() => props.handaleBtn(props.food)}
                            >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;