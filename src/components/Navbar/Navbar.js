import React from 'react';

import logo from '../../images/Logo.svg';
const Navbar = () => {
   return (
      <div className='mane'>
         <div>
         <img className='logo' src={logo} alt="" />
         </div>
         <div className="mane-items">
            <ul>
               <li><a href="/order">Order</a></li>
               <li><a href="/review">Order review</a></li>
               <li><a href="/inventory">Manage Inventory</a></li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;