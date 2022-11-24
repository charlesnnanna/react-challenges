import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import Service, { getHeroes, heroesOptions, villiansOptions } from './Service';

function SuperHeroes(props) {
    const [heroes, setHeroes] = useState([])
    const [currentPage, setCurrentPage] = useState('')
    const [currentHero, setCurrentHero] = useState('')
    const [query, setQuery] = useState('')
    const [index, setIndex] = useState(5)
    const [prevIndex, setPrevIndex] = useState(0)
    const options = {
        method: 'GET',
        url: 'https://superhero-search.p.rapidapi.com/api/heroes',
        headers: {
          'X-RapidAPI-Key': '9a90aa28d5msh372f0520757cfedp14dd78jsn986c7cf6f9b5',
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
      };


    useEffect(() => {
        Axios.request(options)
        .then((response) => {
            //setHeroes(response.data)
            //console.log(response.data.slice(prevIndex,index))
            setHeroes(response.data.slice(prevIndex,index)) 
        })
    },[index])

    function getHeroes (){ 
        Axios.request(villiansOptions)
        .then(response => {
            console.log(response.data)
            
        })
        .catch(err => {console.log (err)})

        console.log(1)
    }

    function nextPage (){
        if (index === 20 && prevIndex === 15){
            setPrevIndex(0)
            setIndex(5)
        } else{
            setPrevIndex(prevIndex => prevIndex+5)
            setIndex((index) => index + 5)
        }
            
            
    }

    function prevPage (){
        if (index === 5 && prevIndex === 0){
            setPrevIndex(15)
            setIndex(20)
        } else{
            setPrevIndex(prevIndex => prevIndex-5)
            setIndex((index) => index - 5)
        }
        
    }

    function goToPage(page){
        let pageBoundary = page*5
        setIndex(index => pageBoundary)
        setPrevIndex(prevIndex => pageBoundary-5)
    }

    

    return (
        <div>
            <button onClick={() => (prevPage())}>PREVIOUS</button>
            <button onClick={() => (goToPage(1))}>1</button>
            <button onClick={() => (goToPage(2))}>2</button>
            <button onClick={() => (nextPage())}>NEXT</button>
            <button onClick={() => (getHeroes())}>test</button>

            
            <div>
                {
                    heroes.map((hero, index) => {
                        return (
                            <div key = {hero.id}>
                                <img src = {hero.images.sm}/>
                                <p>{hero.name}</p>
                            </div>
                        )
                    })
                }
            </div> 
        </div>
    );
}

export default SuperHeroes;