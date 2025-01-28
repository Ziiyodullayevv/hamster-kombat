import React from 'react';
import './Modal.css';

export default function Modal({ setModal }) {
  return (
    <div className='modal'>
      <div className='modal-card'>
        <div className='modal-header'>
          <img onClick={setModal} src='/close.svg' alt='close' />
        </div>

        <div className='modal-list'>
          <div className='list'>
            <div className='list-item1'>
              <img src='/list1.svg' alt='list1' />

              <div>
                <h3>Тоp 10 cmc pairs</h3>
                <h5>Profit per hour</h5>

                <h3>
                  <img src='/coin.svg' alt='' />
                  120
                </h3>
              </div>
            </div>

            <hr />

            <div className='list-item2'>
              <h3>lvl 1</h3>
              <div className='list-item2-coin'>
                <img src='/coin.svg' alt='coin' />
                <h5>192</h5>
              </div>
            </div>
          </div>

          <div className='list'>
            <div className='list-item1'>
              <img src='/list1.svg' alt='list1' />

              <div>
                <h3>Тоp 10 cmc pairs</h3>
                <h5>Profit per hour</h5>

                <h3>
                  <img src='/coin.svg' alt='' />
                  120
                </h3>
              </div>
            </div>

            <hr />

            <div className='list-item2'>
              <h3>lvl 1</h3>
              <div className='list-item2-coin'>
                <img src='/coin.svg' alt='coin' />
                <h5>192</h5>
              </div>
            </div>
          </div>

          <div className='list'>
            <div className='list-item1'>
              <img src='/list1.svg' alt='list1' />

              <div>
                <h3>Тоp 10 cmc pairs</h3>
                <h5>Profit per hour</h5>

                <h3>
                  <img src='/coin.svg' alt='' />
                  120
                </h3>
              </div>
            </div>

            <hr />

            <div className='list-item2'>
              <h3>lvl 1</h3>
              <div className='list-item2-coin'>
                <img src='/coin.svg' alt='coin' />
                <h5>192</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
