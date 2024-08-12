import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // Import Tailwind CSS
import App from './App';
import { store } from './redux/Slices/Store';
import { Provider } from 'react-redux';
import  { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter> 
    <Provider store={store}>          {/* this "Provider" tag is use for Redux */}
        <App /> 
      <Toaster/>                        
    </Provider>     
</BrowserRouter>  
    
);


