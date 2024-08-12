import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';


const Product = ({item}) => {

  const cart = useSelector ((state) => state.cart.items );    // feth the "cart" data from "CartSlice.jsx" using useSelector hook.
  const dispatch = useDispatch();                   // fetch the funtion from "CartSlice.jsx" using useDispatch hook.

  const addToCart = () => {                     
    dispatch(add(item));
    toast.success("Item Added to Cart");
  }

  const removeFromCart = () => { 
    dispatch(remove(item.id));            
    toast.error("Item Removed from Cart");
  }

          
  return ( 

      // yahan shadow add kerna hai 
      // first remove the outline from parent div line no.31


    <div className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in
            gap-3 p-4 mt-10 ml-5 rounded-xl 
            border-[2px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ">
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{item.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[11px] text-left "
        >{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>  {/* For hiding the some description text*/}
      </div>

      <div className="h-[180px]">
        <img src= {`${item.image}`} className='h-full w-full '/>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className='text-green-600 font-semibold'>${item.price}</p>
        </div>

        {/* This is funtion is use for the show "Add to Cart" or "Remove to Cart" */}

          {
            cart.some( (p) => p.id === item.id) ?  // is true then show this one 
            (<button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in" 
              onClick={removeFromCart}>
              Remove Item
            </button>) :                  // if else then show this button.
            (<button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in" 
              onClick={addToCart}>
              Add to Cart
            </button>)
          } 

      </div>

           
        
    </div>
  )
}

export default Product