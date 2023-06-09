/* eslint-disable react/prop-types */
// CSS
import { useState, useRef } from 'react';
import './Game.css';

export const Game = ({ 
    verifyLetter, 
    pickedWord, 
    pickedLetter, 
    pickedCategory, 
    guessedLetters, 
    letters, 
    wrongLetters, 
    guesses, 
    score  }) => {
        const [letter, setLetter] = useState("");
        const letterInputRef = useRef(null)

        const handleSubmit = (e) => {
            e.preventDefault();

            verifyLetter(letter);

            setLetter("");

            letterInputRef.current.focus();
        }
  return (
    <div className='Game'>
        <p className="points">
            <span>Pontuação: { score }</span>
        </p>
        <h1>Advinhe a palavra</h1>
        <h3 className="tip">Dica: <span>{pickedCategory}</span> </h3>
        <p>Voce ainda tem  {guesses} tentativas !</p>
        <div className="wordContainer">
            {letters.map((letter, i) => (guessedLetters.includes(letter) ? (

                <span key={i} className="letter">{letter}</span>
                ): (
                <span key={i} className="blankSquare"></span>
            )
            ))}
        </div>
        <div className="letterContainer">
            <p>Tente advinhar uma letra da palavra:</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='letter' 
                maxLength="1" 
                required 
                onChange={(e) => setLetter(e.target.value)}
                value={letter}
                ref={letterInputRef}
                />
                <button>Jogar !</button>
            </form>
            <div className="wrongLettersContainer">
                <p>Letras já utilizada</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    </div>
    
  )
}
