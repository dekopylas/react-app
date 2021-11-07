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
   async  getAllCharacters(){
        const res = await this.getResourse('/characters?page=5&pageSize=10');
        return res.map(this._transformChar());
    }

    async getCharacter(id){
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformChar(character);
    }
   _transformChar(char){
       return {
        name : char.name,
        gender : char.gender || 'no info',
        born : char.born || 'no info',
        died : char.died || 'no info',
        culture : char.culture || 'no info'
       }
    }


}

