import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import {Button, CardBack, CardFront} from './styler';

function CardFlip(props) {
  const {word} = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" infinite="false">
        <CardFront onClick={handleClick}>
          <h1>{word.english}</h1>
          <h2>"{word.example}"</h2>
        </CardFront>

        <CardBack onClick={handleClick}>
          <h1>{word.turkish}</h1>
        </CardBack>
      </ReactCardFlip>
  )
}

export default CardFlip