import React from 'react'; //import react to use jsx
import {useSpring, animated } from '@react-spring/web';  //for animations

//Define the card component
const Card = ({card, onClick, isFlipped}) => {   // card component takes card, onclick, isFlipped as props
    const {front, back} =card; //destructure the card object to get front and back values.

    //create a spring animation for the card rotation
    const props =useSpring({
        transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)', //rotate based on the flipped state
    });

  return (

    //Animated div that represents the card
    <animated.div
        className="card" // Use the card class
        style={{
            ...props,
            perspective: '1000px',
            margin: '10px',
        }}
        
        onClick= {onClick} //Handles click event
        
        >
            {/** Inner div for the card face */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden', //hides when flipped
                display:'flex',
                justifyContent: 'center',
                // backgroundColor: '#76C7C0',
                // boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Shadow for depth
                alignItems: 'center',
                // borderRadius: '8px',

            }}>
                {isFlipped ? front : back}
            </div>
    </animated.div>
  );
};

export default Card; 