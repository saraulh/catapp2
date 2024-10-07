import { useState } from 'react';
import './Task1A.css'

const ReverseInput = () => {
  //definerer state for input-feltet
  const [input, setInput] = useState('');

  //funksjpn som håndterer inåut endringer
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // staten oppdateteres med ny verdi 
  };

  // reverserer 
  const reverseString = (str: string) => {
    return str.split('').reverse().join('');
  };

  return (
    <div>
      <h3>Type and See the Magic 🦄</h3>
      <form>
        <input
          type="text"
          placeholder="Type something..."
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <p className="reversed-text">Reversed: {reverseString(input)}</p>
    </div>
  );
};

export default ReverseInput;

