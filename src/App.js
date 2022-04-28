import React, {useState} from 'react';
import './App.css';

function App() {
const initialCityState = {city :'' , state: '' }

const [cityState, setCityState] = useState(initialCityState);
const [zipcode, setZipCode] = useState('');

const onChangeHandler =(e)=>{
  e.preventDefault();
  const {value} = e.target
  setZipCode(value.replace(/[^\d{5}]$/, "").substr(0, 5));
}
  return (
    <div className="App">
      <h1>City/State look up tool</h1>
      <form action='' className='form-data'>
        <label htmlFor='zip'>Type Zipcode Here</label>
        <input 
          className='zip'
          name='zip'
          id='zip'
          type='text'
          value={zipcode}
          placeholder='XXXXX'
          onChange={onChangeHandler}
         />
         <label htmlFor='city'>City</label>
         <input
          className={`city`}
          name='city'
          id='city'
          type='text'
          value={cityState.city}
          disabled
         />
         <label htmlFor='state'>State</label>
         <input 
          className={`state`}
          name='state'
          id='state'
          type='text'
          value={cityState.state}
          disabled/>
      </form>
      <pre>
        <code>
          {JSON.stringify({
            zipcode: zipcode,
            city: cityState.city,
            state: cityState.state,
          })}
        </code>
      </pre>
    </div>
  );
}

export default App;
