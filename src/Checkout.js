// import { CastConnectedSharp } from '@material-ui/icons';
import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className= 'checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' 
                    src='https://media-exp1.licdn.com/dms/image/C561BAQF2mlopAmCHJA/company-background_10000/0?e=1601413200&v=beta&t=xtefj1T73aBnr8Eoq8eZc4FjhUQvGxsE48WOzCYXKFs' 
                    alt=''
                />
                <div>
                    <h4>Hello, {user?.email}</h4>
                    <h2 className= 'checkout__title'>Your shopping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}

                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
    {/* <h2>subtotal will go here</h2> */}

            </div>            
        </div>
    )
}

export default Checkout
