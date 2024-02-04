import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');

  function addNewTransaction(ev)
  {
    ev.preventDefault();
    const url=process.env.REACT_APP_API_URL + '/transaction';
    // console.log(url);
    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({name,description,datetime})
    }).then(response=>{
      response.json().then(json=>{
        console.log('result',json);
      });
    });
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>

      <form onSubmit={addNewTransaction}>

        <div className='basic_info'>
          <input type="text"
          value={name}
          onChange={ev=> setName(ev.target.value)}
          placeholder='Add your expension'></input>
          <input type="datetime-local"
          value={datetime}
          onChange={ev=>setDatetime(ev.target.value)}></input>
        </div>

        <div className='description'>
          <input type="text" 
          value={description}
          onChange={ev=>setDescription(ev.target.value)}
          placeholder='Description'></input>
        </div>

        <button type="submit">Add new expension</button>

      </form>

      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'> New Sumsung tv</div>
            <div className='description'>it was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>03-02-2024 12:51</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Gib job new website</div>
            <div className='description'>it was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price green'>+$400</div>
            <div className='datetime'>03-02-2024 12:51</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Iphone</div>
            <div className='description'>it was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price red'>-$900</div>
            <div className='datetime'>03-02-2024 12:51</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
