import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import  CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
const App = () =>{
  //js logics comes here
  console.log('rendered.')
  const [searchField,setsearchField] = useState('');//[value, setVAlue]
  const[Monsters, setMonsters] =  useState([]);
  const [filteredData, setfilteredData] = useState([Monsters])
  //searchbox logic
  const onSearchChange = (event)=>{ 
    const searchString = event.target.value.toLocaleLowerCase();
    setsearchField(searchString)
  }
    
    //using useEfect() to create side effect 

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then((user) => setMonsters(user))
    }, []);
    useEffect(()=>{
        const newfilteredData = Monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
       });
       setfilteredData(newfilteredData)
    }, [Monsters, searchField]) 

  return(
    <div className='App'>
    <h1 className='mst-hdr'>Monster rolodex</h1>
    <SearchBox onSearchHandler = {onSearchChange} Placeholder ="Search for monster" className = "search-box"></SearchBox>
    <CardList monsters={filteredData} />
    </div>
  )
}
export default App;
