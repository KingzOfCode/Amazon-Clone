import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
        const [{ basket }, dispatch] = useStateValue();
        const addToBasket = () => {
            // dispatch some action or the item into the data layer
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            });
        }
    return ( <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
            </p>
            {/*<p>{rating}</p>*/}
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
            </div>
            <img src= {image} alt= ""/>
        </div>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
    );

    {/* <img
            src= "https://www.amazon.com/dp/B07FZ8S74R/ref=ods_gw_m_btf_tiaucc_evg_eng_sept?pf_rd_r=SQBCQQ36044NH9MRCBCG&pf_rd_p=a0c03138-02fc-4988-a01f-0b6ac4bbcd6d"home__image
            alt=""
        /> */}
}

export default Product;