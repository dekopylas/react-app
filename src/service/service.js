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
        culture : char.culture || 'no info'
       }
    }


}

