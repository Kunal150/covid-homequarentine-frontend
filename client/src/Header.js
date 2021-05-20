import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
      
            <div className='header'>
             <div className="header_nav">
                 <Link to="/Medical">
             <div className='header__option'>
             <span className='header__optionLineOne'>Medical store</span>
                 <span  className='header__optionLineTwo'>--Home Delivery</span>
             </div>
             </Link>
             <Link to="/Recommended">
             <div className='header__option'>
                 
                 <span className='header__optionLineOne'>Recommended</span>
                 <span  className='header__optionLineTwo'>--Best Doctors</span>
                 </div>
                 </Link>
                 <Link to="./Lunch">
                 <div className='header__option'>
                 <span className='header__optionLineOne'>Lunch/Dinner</span>
                 <span  className='header__optionLineTwo'>--Delivery</span>
                 </div>
                 </Link>
                 <Link to="./User">
                 <div className='header__option'>
                 <span className='header__optionLineOne'>Daily</span>
                 <span  className='header__optionLineTwo'>--Routine</span>
                 </div>
                 </Link>
                 <Link to="/Lungs">
                 <div className='header__option'>
                 <span className='header__optionLineOne'>Lungs function</span>
                 <span  className='header__optionLineTwo'>--Self assesment</span>
                 </div>
                 </Link>
                 <Link to="/Thing">
                 <div className='header__option'>
                 <span className='header__optionLineOne'>Things</span>
                 <span  className='header__optionLineTwo'>--YOU should follow</span>
                 </div>
                 </Link>
                 <Link to="/Best">
                 <div className='header__option'>
                 <span className='header__optionLineOne'>BEST</span>
                 <span  className='header__optionLineTwo'>--HOSPITALS OF COVID</span>
                 </div>
                 </Link>




             </div>

        </div>
    )
}

export default Header
