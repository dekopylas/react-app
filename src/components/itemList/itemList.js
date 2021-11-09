import React, {Component} from 'react';
import GotService from '../../service/service';
import Spinner from '../spinner/spinner';
import './itemList.css';

export default class ItemList extends Component {
    GotService = new GotService();
    state = {
        itemList : null
        
    };


componentDidMount(){
   this.onCharLoaded();
}
onCharLoaded(){
    this.GotService.getAllCharacters()
        .then(itemList=>{ 
            this.setState({itemList})
        })
}
renderItems (arr){
    return arr.map((item, i) =>{
        return (
            <li key = {i} 
            className="list-group-item"
            onClick = {()=>this.props.changeCharacter(i)}
            >
            {item.name}
        </li> 
        )
    })
}



    render() {
        const {itemList} = this.state;
        if (!itemList){
            return <Spinner/>
        }
        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}