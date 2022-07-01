import logo from './logo.svg';
import './App.css';
import { useState, useEffect }  from 'react';

function App() {
  const artists =[
    {name:'Razzak', profession:'Father'},
    {name:'Bovita', profession:'Mother'},
    {name:'Alomgir', profession:'Nayok'},
    {name:'Dipzol', profession:'Villan'},
    {name:'Dildar', profession:'Funny'},
    {name:'Sabana', profession:'Nayika'}
  ]
  const products = [
    {name:'Photoshop', price:'$99.65'},
    {name:'Illustrator', price:'$49.95'},
    {name:'PDF Riader', price:'$6.75'}
  ]
  const friends = ['Sujon','Monsur','Hridoy','Kawsar','Ibrahim','Shipon','Mohin']
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react project</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>
        {
          artists.map(artist => <Artist artist={artist}></Artist>)
        }
        <Artist artist={artists[0]}></Artist>
        <Artist artist={artists[1]}></Artist>
        <Artist artist={artists[2]}></Artist>

        {
          products.map(product => <Product product={product}></Product>)
        }

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name="Faysal Mia" job="Frontend Developer"></Person>
        <Person name="Aslam Parvez" job="Programmer"></Person>
        <Person name="Mehedi Hasan" job="Web Developer & Development"></Person>
        <Person name="Monsur Alam" job="Businessman"></Person>

      </header>
    </div>
  );
}
// State Use
function Counter(){
  const[count, setCount] = useState(0);
  const handlerIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h3>Count: {count} </h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handlerIncrease}>Increase</button>
    </div>
  )
}
// Load Daynamic Data, API Call useEffect intregate this.state.
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Daynamic User : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
// Pass object to component and access object
function Product(props) {
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    marginBottom: '10px',
    padding: '5px'
  }
  return(
    <div style={productStyle}>
        <h4>{props.product.name}</h4>
        <h3>{props.product.price}</h3>
        <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  const personStyle = {
    border:'6px solid blue',
    color: 'green',
    padding:'10px',
    margin:'12px',
    width:'800px'
  }
  return(
    <div style={personStyle}>
      <h1>My Name : {props.name}</h1>
      <p style={{color:'red'}}>My Profession : {props.job}</p>
    </div>
  )
}
function Artist(props){
  const artistStyle ={
    border:'1px solid blue',
    borderRadius:'10px',
    backgroundColor: 'green',
    height: '200px',
    width: '400px',
    marginBottom: '10px',
    padding: '5px',
    color:'white'
  }
  return(
    <div style={artistStyle}>
      <h2>Name : {props.artist.name}</h2>
      <h3>Profession: {props.artist.profession}</h3>
    </div>
  )
}

export default App;
