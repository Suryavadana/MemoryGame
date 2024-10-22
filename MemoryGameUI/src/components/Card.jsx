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
        style={{
            ...props, // Spread the animation properties
            width: '100px',
            height: '100px',
            border: '1px solid #333',
            cursor: 'pointer',
            perspective: '1000px', // for 3D effect
            position: 'relative', //for the inner content
            margin: '10px', //space between the cards
        }}
        onClick= {onClick} //Handles click event
        >
            {/** Inner div for the card face */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibitlity: 'hidden', //hides when flipped
                display:'flex',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0',
                alignItems: 'center',
                borderRadius: '8px',
            }}>
                {isFlipped ? front : back}
            </div>
    </animated.div>
  );
};

export default Card; 
