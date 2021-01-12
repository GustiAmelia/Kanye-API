import logo from './logo.svg';
import './App.css';
import kanye from './assets/image/kanye.jpg';
import React, {useState,useEffect} from 'react';
import Axios from 'axios';

function App() {

  const [quote, setQuote] = useState('')
  const [favorite,setFavorite] = useState([])
  const [value, setValue] = useState('')
  const [myQuote, setMyQuote] = useState([])
  console.log(myQuote)

  useEffect(()=>{
    Axios.get(`https://api.kanye.rest/`)
    .then((res)=>{
      setQuote(res.data.quote)
      // console.log(res.data.quote)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const handleGetQuote = ()=>{
    Axios.get(`https://api.kanye.rest/`)
    .then((res)=>{
      setQuote(res.data.quote)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const handleAddFavorite = ()=>{
    if(!favorite.includes(quote)){
      setFavorite([...favorite,quote])
    }
  }

  const handleInput = (e)=>{
    e.preventDefault()
    setValue(e.target.value)
  }

  const handleSubmit =()=>{
    if(!myQuote.includes(value)){
      setMyQuote([...myQuote,value])
    }
  }

  return (
    <div className="App">
      <img src={kanye} className="image"/>
      <div>
        <h1>Kanye-West Quote</h1>
      </div>
      <div>
        <h2>{quote}</h2>
      </div>
      <div>
        <button onClick={handleGetQuote}>Get Quote</button>
        <button onClick={handleAddFavorite}>Add Favorite</button>
      </div>
      {favorite.map((item,index)=>{
        return (
          <div key={index} className="favoriteBox">
            <p>{index+1}. </p>
            <p>{item}</p>
          </div>
        )
      })}
      <div className='border'/>
      <h2>My Quote</h2>
      <input onChange={handleInput}/>
      <button onClick={handleSubmit}>Submit</button>
      {myQuote.map((item,index)=>{
        return (
          <div key={index} className="favoriteBox">
            <p>{index+1}. </p>
            <p>{item}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
