import react, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = '';

    setItems((old) => {
      return [...old, item];
    });

    setItem('');
  };

  const clearItems = () => {
    setItems([]);
  };

  // TO ADD
  // Checkbox with complete task - border in the middle
  // Change screen height to fit all content with overflow
  // Struct for each item - check & name

  return (
    <div className='container'>
      <nav id='navbar'>
        <h1>Idanref To-Do List</h1>
      </nav>

      <form id='input-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter..' onChange={(e) => setItem(e.target.value)} value={item} />
        <button type='submit'>Add</button>
        <button onClick={clearItems}>Clear</button>
      </form>

      <section id='items-container'>
        <div className='items-box'>
          <ul>
            {items.map((item, index) => {
              if (item) {
                return (
                  <li key={index} className='filled'>
                    {item}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
