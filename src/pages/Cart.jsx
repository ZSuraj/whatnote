import React, { useContext, useState } from 'react'

import '../styles/Cart.scss'
import { MyContext } from '../ContextApi'

const Cart = () => {

    const {counter1, counter2, counter3, city} = useContext(MyContext)
    const subTotal = (55000*counter1)+(35000*counter2)+(25000*counter3)
    const tax = (10/100) * subTotal 
    const total = subTotal + tax
    const [paymentId, setPaymentId] = useState("")
    
    const handlePay = () => {
        // handle payment
        var options = {
            key: process.env.REACT_APP_RAZORPAY_API_KEY,
            key_secret: process.env.REACT_APP_RAZORPAY_SECRET_KEY,
            amount: total*100,
            currency:"INR",
            name:"Bill",
            description:"Test Transaction",
            handler: function(response){
              setPaymentId(response.razorpay_payment_id)
            },
            prefill: {
              name: "suraj",
              email: "surajjain.sj19@gmail.com",
              contact: "9551110707"
            },
            notes:{
              address: "Razorpay Corporate office"
            },
            theme: {
              color: "#d66616",
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
    }

    const cartList = [{
        "id": 1,
        "amount": 55000,
        "cityName": city,
        "quantity": counter1,
    },{
        "id": 2,
        "amount": 35000,
        "cityName": city,
        "quantity": counter2,
    },{
        "id": 3,
        "amount": 25000,
        "cityName": city,
        "quantity": counter3,
    },

]

    const [showDetails, setShowDetails] = useState(
        cartList.map(() => false)
    )

    function handleExpand(index) {
        const updatedShowDetails = [...showDetails];
        updatedShowDetails[index] = !updatedShowDetails[index];
        setShowDetails(updatedShowDetails);
    }

  return (
    <div className='cart-page-container flex flex-col bg-stone-100'>
        <div className='h-[100px] flex justify-center items-center'>
            <p className='font-semibold text-3xl'>Shopping Bag - Checkout</p>
        </div>
        <div className='h-[302px]'>
            {
                cartList.map((cart, index) => (
                    <div key={cart.id} className='flex flex-col'>
                        <div className='m-[1px] border border-black cursor-pointer' onClick={() => handleExpand(index)}>
                            <div className='ml-4'>
                                {
                                    (() => {
                                        switch(cart.amount) {
                                        case 55000:
                                            return <p className='text-[#00B33C] font-semibold text-2xl'>₹{cart.amount}</p>;
                                        case 35000:
                                            return <p className='text-[#FF6600] font-semibold text-2xl'>₹{cart.amount}</p>;
                                        case 25000:
                                            return <p className='text-[#808080] font-semibold text-2xl'>₹{cart.amount}</p>;
                                        default:
                                            return
                                        }
                                    })()
                                }
                                {
                                    showDetails[index] && 
                                    <>
                                        <p className='font-lg font-semibold text-[#7C7C7C]'>{cart.cityName} | Quantity - {cart.quantity} | Stall Type Details</p>
                                        <div className='flex'>
                                            <p className='text-[#555454]'>Terms and conditions</p>
                                            <p className='text-[#7C7C7C]'>Somw legal strings here</p>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>                    
                    </div>
                ))
            }
        </div>
        <div className='flex flex-col h-[200px] px-10'>
            <div className='h-[20%]'>
                <p className='text-[#EB008B] mt-1'> We levy a 50% Advance on all our Stall sales. The rest 50% shall be credited post the event.</p>
            </div>
            <div className='flex justify-between h-[60%]'>
                <div>
                    <p className='before-total'>Subtotal</p>
                    <p className='before-total'>Tax</p>
                    <p className='after-total'>Total</p>
                </div>
                <div>
                    <p className='before-total'>₹{subTotal}</p>
                    <p className='before-total'>₹{tax}</p>
                    <p className='after-total'>₹{total}</p>
                </div>
            </div>
            <div className='w-full text-center' onClick={handlePay}>
                <button className='pay-btn w-[330px] h-[55px] mb-2'>Pay Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cart