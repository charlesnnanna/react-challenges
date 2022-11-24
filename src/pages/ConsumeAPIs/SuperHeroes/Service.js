import  Axios  from 'axios';
import React, { useState } from 'react';

    
        export const heroesOptions = {
            method: 'GET',
            url: 'https://superhero-search.p.rapidapi.com/api/heroes',
            headers: {
              'X-RapidAPI-Key': '9a90aa28d5msh372f0520757cfedp14dd78jsn986c7cf6f9b5',
              'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
            }
          }

        export const villiansOptions = {
                method: 'GET',
                url: 'https://superhero-search.p.rapidapi.com/api/villains',
                headers: {
                  'X-RapidAPI-Key': '9a90aa28d5msh372f0520757cfedp14dd78jsn986c7cf6f9b5',
                  'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
                }
        }

        export const paramOptions = () => ({
                method: 'GET',
                url: 'https://superhero-search.p.rapidapi.com/api/',
                params: {hero: "Spiderman"},
                headers: {
                    'X-RapidAPI-Key': '9a90aa28d5msh372f0520757cfedp14dd78jsn986c7cf6f9b5',
                    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
                }
        })

        export const getHeroes = () => { 
            Axios.request(heroesOptions)
            .then(response => {
                console.log(response.data)
                return response.data
            })
            .catch(err => err)
        }

        export const getVillians = () => { Axios.request(villiansOptions)
            .then(response => response.data)
            .catch(err => err)}

        export const getParam = () => {
            Axios.request(paramOptions)
            .then(response => response.data)
            .catch(err => err)
        } 

        