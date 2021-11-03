import React from 'react';
export default class GotService {

    constructor(){
        this._api = 'https://anapioficeandfire.com/api'
    }

    async getResourse(url){
    const result = await fetch(`${this._api}${url}`)
    return await result.json()
    }
    getAllCharacters(){
        return this.getResourse('/characters?page=5&pageSize=10');
    }

    getCharacter(id){
        return this.getResourse(`/characters/${id}`);
    }



}
const got = new GotService();

got.getAllCharacters()
    .then(res => res.forEach(element => {
        console.log(element.name)
    }));
got.getCharacter(130)
    .then(res=>console.log(res));
