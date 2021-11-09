import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../service/service';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

export default class RandomChar extends Component {
constructor(){
    super();
    
    this.state = {
        char :{},
        loading : true,
        error : false
    }
    
}
GotService = new GotService();
componentDidMount(){
    this.onLoad();
    this.timerId = setInterval(this.onLoad, 1500);
}
componentWillUnmount(){
    clearInterval(this.timerId);
    console.log('unmount');
}

onCharLoaded = (char)=>{
    this.setState({char, loading : false})
}
onError = () => {
    this.setState({loading : false,
        error : true})
} 

onLoad=()=>{
    const id = Math.floor(Math.random()*140 + 25);

    this.GotService.getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError);
}



    render() {

        const {char, loading, error} = this.state;
        const content = !(loading || error)? <Wiew char ={char}/> : null;
        const spinner = loading? <Spinner/> : null;
        const errorMessage = error? <Error/>: null;


        return (
            <div className="random-block rounded">
               {content}
               {spinner}
               {errorMessage}
            </div>
        );
    }
}
const Wiew = ({char})=>{
    const {name, gender, born, died, culture} = char;
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
