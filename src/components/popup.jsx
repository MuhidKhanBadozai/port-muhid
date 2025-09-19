import React, { forwardRef } from 'react';
import './style/popup.css';

const Popup = forwardRef(({ imgRefs }, ref) => {
  return (
    <div className='popup' ref={ref}>
      <div className="img" ref={imgRefs[0]}>
        <img src="./assets/sahulat-hub.png" height={200} width={400} alt="Image 1" />
      </div>
      <div className="img" ref={imgRefs[1]}>
        <img src="./assets/weatherapp.png" height={200} width={400} alt="Image 2" />
      </div>
      <div className="img" ref={imgRefs[2]}>
        <img src="./assets/InvoiceSys.png" height={200} width={400} alt="Image 3" />
      </div>
      <div className="img" ref={imgRefs[3]}>
        <img src="./assets/hotel-managment.png" height={200} width={400} alt="Image 4" />
      </div>
      <div className="img" ref={imgRefs[4]}>
        <img src="./assets/port.png" height={200} width={400} alt="Image 5" />
      </div>
      <div className="img" ref={imgRefs[5]}>
        <img src="./assets/pricepredection.png" height={200} width={400} alt="Image 6" />
      </div>
      <div className="img" ref={imgRefs[6]}>
        <img src="./assets/uniqueart.png" height={200} width={400} alt="Image 7" />
      </div>
    </div>
  );
});

export default Popup;
