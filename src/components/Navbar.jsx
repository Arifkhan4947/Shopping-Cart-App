import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';                                            

const Navbar = () => {

    const {cart} = useSelector( (state) => state);   // fetch the cart data then show on the UI on cart icon the length of items. 
   
  return (
    <div className='bg-gray-300'>
        <nav className='flex justify-between items-center h-[80px] max-w-6xl mx-auto'>
        
            <NavLink to="/">
                <div className='ml-5 bg-gray-300'>
                    <img 
                    className='h-[50px]'
                    src="/logo.png" alt='Logo'
                    />
                </div>          
            </NavLink>

            <div className='flex text-slate-700 font-medium items-center mr-5 space-x-6'>                                                                                                            
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cart">
                    <div className='relative'>
                        <FaShoppingCart className="text-2xl"/>     {/* This is cart icon */}
                        {
                            cart.items.length > 0 &&
                            <span 
                                className='absolute -top-1 -right-2 bg-green-600 text-sm w-5 h-5 flex justify-center items-center
                                    animate-bounce rounded-full ' 
                                >{cart.items.length}
                            </span>        
                        }
                        
                    </div>         
                </NavLink>
                         
            </div>

        </nav>
    </div>

  )
}

export default Navbar