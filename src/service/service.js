/* eslint-disable no-unused-vars */
import React from 'react';
export default class GotService {

    constructor(){
        this._api = 'https://anapioficeandfire.com/api'
    }

    async getResourse(url){
    const result = await fetch(`${this._api}${url}`)
    return await result.json()
    }
   getAllCharacters = async () => {
        const res = await this.getResourse('/characters?page=5&pageSize=10');

        return res.map(this._transformChar);
        
    }

    getCharacter = async(id) => {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformChar(character);
    }
    getAllBooks = async() =>{
        const res = await this.getResourse('/books?page=1&pageSize=10');
        return res.map(this._transformChar);
    }
    getBook = async (id)=>{
        const book = await this.getResourse(`/books/${id}`);
        return this._transformChar(book);
        
    }
    getAllHouses = async ()=>{
        const res = await this.getResourse('/Houses');
        return res.map(this._transformChar);
    }
    getHouse = async (id) =>{
        const house = await this.getResourse(`/houses/${id}`);
        return this._transformChar(house);
    }
    _extractId (char){
        const regId = /\/([0-9]*)$/;
        return char.url.match(regId)[1];
    }
   _transformChar = (char)=>{

       return {
        id : this._extractId(char),
        name : char.name || 'no info',
        gender : char.gender || 'no info',
        born : char.born || 'no info',
        died : char.died || 'no info',
        culture : char.culture || 'no info',
        authors : char.authors || 'no info',
        numberOfPages : char.numberOfPages || 'no info',
        currentLord : char.currentLord || 'no info',
        words : char.words || 'no info',
        region : char.region || 'no info'
       }
    }


}

