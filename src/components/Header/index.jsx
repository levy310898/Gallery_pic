import React from 'react'
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const { Title } = Typography;

export default function Header() {
  return (
    <div className="header">
      <div style ={{marginLeft:'20px'}}>
        <NavLink to='/'><Title level ={2}>Photo app</Title></NavLink>
      </div>

      <ul className = 'header__nav-list'>
        <li className = 'header__nav-item'>
          <NavLink className = 'header__nav-link' activeClassName = "header__nav-link--active" exact to='/' >Home</NavLink>
        </li>

        <li className='header__nav-item'>
          <NavLink className='header__nav-link' to='/gallery' activeClassName="header__nav-link--active">My gallery</NavLink>
      </li>
      </ul>
      
    </div>
    
  )
}
