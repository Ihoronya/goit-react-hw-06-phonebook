import React from 'react';
import styles from './NoContactsMessage.module.css';

const NoContactsMessage = () => {
  return (
    <div className={styles.sadMessage}>
      <svg
        className={styles.sadSvg}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="150px"
        height="150px"
        viewBox="0 0 128 128"
      >
        <g>
          <polygon
            points="117.4,68.8 117.4,59.3 57.6,59.3 57.6,68.8 104.7,68.8 104.7,119.7 83.2,119.7 83.2,124.9 114.8,124.9 
		114.8,119.7 111.5,119.7 111.5,68.8 	"
          />
          <path d="M49.4,91.4H16.7V58.6h-6.6v37.7h0c0,0.2,0,0.4,0,0.6V126h5.8v-23H49v23h5.8V96.9C54.8,93.9,52.4,91.4,49.4,91.4z" />
          <polygon
            points="95.6,32 103,52.8 90.2,52.8 90.2,56.7 106.8,56.7 106.8,55.4 106.8,52.8 97.2,26.2 103.2,3.5 98.9,2.3 87.5,44.7 
		91.9,45.9 	"
          />
          <path
            d="M86.5,108.5L70.1,78.4c-1.2-2.6-3.9-4.2-6.5-4.2H43.7v-8.7H44c-4.3,0-7.9-3.6-7.9-7.9V44.8c0-0.9,0.5-1.4,1.4-1.4
		s1.4,0.5,1.4,1.4v12.8c0,2.8,2.4,5,5,5h12v-5.2h21.2c0,0,0-0.1,0-0.1c0-2.6-2.1-4.8-4.8-4.8c0,0,0,0,0,0H49v-18
		c0-2.6-1.8-4.6-4.5-5c-0.9-0.1-1.7-0.1-2.8,0c-9.9,0.7-19.9,8.8-21.2,19.3c-1.2,9.3-1.4,19.9-0.4,28.8c0.9,5.5,5.1,10.1,11.1,10.8
		c0.6,0.1,1.2,0.1,1.9,0.1H59l14.5,26.2c1.7,3.6,5.9,5,9.5,3.4C86.6,116.5,88.2,112.2,86.5,108.5z"
          />
        </g>
        <circle cx="65.3" cy="36.9" r="11.4" />
      </svg>
      <p>
        It looks like you don't have any friends. Try to find some and add them
        to your phonebook
      </p>
    </div>
  );
}

export default NoContactsMessage;
