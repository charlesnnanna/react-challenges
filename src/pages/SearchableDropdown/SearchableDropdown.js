import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/outline'
import './PrimostarDropdown.css'
import Option from './components/Option';

const options = [
    {name: 'Butterfly'},
    {name: 'Dog'},
    {name: 'Mouse'},
    {name: 'Cow'},
    {name: 'Rabbit'},
]
function SearchableDropdown({label}) {
    const [searched, setSearched] = useState([])
    const [selected, setSelected] = useState(false)
    const [selectedItem, setSelectedItem] = useState('Select a Pet')
    const [query, setQuery] = useState('')


    useEffect(() => {
        if(query[0]){
            setSelected(true)
        }
        if(query === ''){
            setSearched([...options])
            setSelected(false)
        }
        console.log(selected)
        console.log(searched)
    }, [query])

    function handleSearch (e){    
        const searchedString = e.target.value
        const regex = new RegExp(searchedString, 'i')
        const arr = []

        for (let i = 0; i < options.length; i++){
            if (options[i].name.search(regex) !== -1){
                arr.push(options[i])
            }
        }

        setSearched([...arr])
        setQuery(e.target.value)
       
    }

    function handleClick (){
        setSearched([...options])
        setSelected(!selected)
    }

    function selectItem (e) {
        
    }
     
    return (
        <div className = 'box '>
            <div className='select-box border '>
                <div className='options-container border '>
                    {
                        selected && searched.map(function(option, index){
                            return (
                                <Option key = {index} click = {() => {selectItem()}} name = {option.name}/>
                            )
                        })  
                    }
                </div>

                <div className='selected flex flex-rows justify-between'>
                        <span>{selectedItem}</span>
                        <span onClick = {() => {handleClick()}}>
                            {selected ? <ChevronUpIcon className='w-4'/> : <ChevronDownIcon className='w-4'/>}   
                        </span> 
                </div>

                <div className='search-box'>
                    <input type='text' placeholder ='Search...'  onChange = {handleSearch}/>
                </div>
            </div>
        </div>
    );
}

export default SearchableDropdown;