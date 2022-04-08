import { useState } from 'react';
import './App.css';
import InputContainer from './components/inputContainer';
import Result from './components/result';
function App() {
const [input,setInput]=useState("");

  return (
  <div className='container'>
   <InputContainer setInput={setInput} />
   
   <Result input={input} />
  </div>
  );
}

export default App;
