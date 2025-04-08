import React, { useEffect } from 'react'
import Card from './Card'
import {useState} from 'react'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsdata] = useState(null)  

    const API_KEY = "bc088dcf68de4f708aa3f61086f1ce6c";

    const getData = async() => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData= await response.json();
        console.log(jsonData.articles);
        setNewsdata(jsonData.articles)
    }

    useEffect(()=> {
        getData()
    },[])

    const handleInput = (e) => {
        console.log(e,EventTarget.value);
        setSearch(e.target.value)
    }
    const userInput = (event) => {
        setSearch(event.target.value)
    }

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
{/* 
          <a>All News</a>
           <a>Trending</a> */}

        </ul>
        <div className='searchBar'>
          <input type='text' placeholder='search News' value={search} onChange={handleInput}/>
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className='head'>Stay Update with TrendyNews</p>
      </div>
      <div className='categoryBtn'>
          <button onClick={userInput} value="Sports">Sports</button>
          <button onClick={userInput} value="Politics ">Politics</button>
          <button onClick={userInput} value="Entertainment">Entertainment</button>
          <button onClick={userInput} value="Health">Health</button>
          <button onClick={userInput} value="Business">Business</button>
          <button onClick={userInput} value="Fitness ">Fitness</button>
          <button onClick={userInput} value="Bollywood">Bollywood</button>
          <button onClick={userInput} value="Technology">Technology</button>
          <button onClick={userInput} value="Travels">Travels</button>

      </div>

      <div>
        {newsData? <Card data={newsData}/> : null}
       
      </div>
    </div>
  )
}

export default Newsapp
