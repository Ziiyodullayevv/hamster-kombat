import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className='wrapper'>
      <div className='header'>
        <h4>Hamster Kombat</h4>
        <div className='buttons-parent'>
          <div className='btn'>
            <h4>Earn per tap</h4>
            <div className='btn-coin'>
              <img src='/coin.svg' alt='' />
              <span>+12</span>
            </div>
          </div>
          <div className='btn'>
            <h4>Coins to level up</h4>
            <span>10 M</span>
          </div>
          <div className='btn'>
            <h4>Profit per hour</h4>
            <div className='btn-coin'>
              <img src='/coin.svg' alt='' />
              <span>+636</span>
            </div>
          </div>
        </div>

        <div className='tap'>
          <img src='/coin.svg' alt='coin' />
          <h3>507,981</h3>
        </div>
      </div>

      <div className='main'>
        <img src='/tap.svg' alt='tap' />
      </div>
      <div className='footer'>
        <div className='footer-top'>
          <div>
            <img src='/char.svg' alt='' />
            <span>6500 / 6500</span>
          </div>

          <span>Boost</span>
        </div>

        <div className='footer-bottom'>
          <div className='card active'>
            <img src='/icon1.svg' alt='icon1' />
            <h4>Exchange</h4>
          </div>

          <div className='card'>
            <img src='/icon2.svg' alt='icon1' />
            <h4>Exchange</h4>
          </div>

          <div className='card'>
            <img src='/icon3.svg' alt='icon1' />
            <h4>Exchange</h4>
          </div>

          <div className='card'>
            <img src='/icon4.svg' alt='icon1' />
            <h4>Exchange</h4>
          </div>

          <div className='card'>
            <img src='/icon5.svg' alt='icon1' />
            <h4>Exchange</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
