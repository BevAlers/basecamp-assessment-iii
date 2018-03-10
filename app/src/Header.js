import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="Header">
          <h1 className="Header-title">Welcome to DevMountaint</h1>
        </header>
    );
  }
}

export default Header;
