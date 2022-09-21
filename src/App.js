import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {users.map(user => <User name={user.name} email={user.email}></User>)};
    </div>
  )
}

function User(props) {
  return (
    <div style={{border: '10px solid black', margin: '5px', borderRadius: '50px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  let [count, setCount] = useState(55);
  const increaseCount = () => setCount(++count);
  const decreaseCount = () => setCount(--count);
  return (
    <div>
      <h3>number: {count}</h3>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

export default App;
