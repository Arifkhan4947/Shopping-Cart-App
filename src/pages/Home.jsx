import React, { useEffect, useState } from 'react'
import Product from "../components/Product";
import Spinner from '../components/Spinner';

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState ([]);   // this is create for insert the API_URL -> "data" into setPosts. for further we can use to render the data on the UI

  async function fetchProductData() {

    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    }
    catch(error){
      console.log("Error aa gya bhai");
      setItems([]);
    }
    setLoading(false);

  }


  // Here "useEffect" hook is used for save the data for 1 time.
  useEffect( () => {
    fetchProductData();
  },[]) 



  return (

    <div>
      { 
        loading ?     // if true then show loading
        (            
          <Spinner />
        ) : 
        items.length > 0 ?  // if true then show this
        (
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-10'>
            {/* Mapping over posts to render each Product component */}
            {
              items.map((item) => (                 // here apply mapping over the items for return the single "item" data. Further add "Product.jsx" component. 
              <Product key={item.id} item={item} />  // Here "item" pass as props   and provide a key for prevent the error in the code it is the best practice. 
              ))
            }
          </div>
        ) : 
        // if false then show this
        (
          <div className="flex justify-center items-center ">
            <p>No Data found</p>
          </div>
        )
      }
  </div>

  );
}

export default Home;