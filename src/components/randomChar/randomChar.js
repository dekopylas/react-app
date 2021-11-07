import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../service/service';
import Spinner from '../spinner/spinner';

export default class RandomChar extends Component {
constructor(){
    super();
    this.onLoad();
    this.state = {
        char :{},
        loading : true
    }
}
GotService = new GotService();
onCharLoaded = (char)=>{
    this.setState({char, loading : false})
}

onLoad(){
    const id = Math.floor(Math.random()*140 + 25);
    this.GotService.getCharacter(id)
        .then(this.onCharLoaded);
}



    render() {

        const {char, loading} = this.state;
        const content = loading? <Spinner/> : <Wiew char ={char}/>;

        return (
            <div className="random-block rounded">
               {content}
            </div>
        );
    }
}
const Wiew = ({char})=>{
    const {name, gender, born= 'jj', died, culture} = char;
    return (
        <>
        <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{culture}</span>
            </li>
        </ul>
        </>
    )
}
