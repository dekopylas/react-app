import React, {Component} from 'react';
import GotService from '../../service/service';


import './charDetails.css';

const Field = ({items, field, label}) =>{
return (
    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{label}</span>
                        <span>{items[field]}</span>
                    </li>
)


}
export {Field};
export default class CharDetails extends Component {
    GotService = new GotService();
    
    state = {
        items : null
    }
componentDidMount(){

    this.onUpdateChar();
}
componentDidUpdate(prevProps){
    if(this.props.charId !== prevProps.charId){
        this.onUpdateChar();
    }
}
onUpdateChar(){
    const {charId} = this.props;
    if (!charId){
        return;
    }
    

    this.GotService.getCharacter(charId)
    .then(items => this.setState({items}));
}

    


    render() {
        if (!this.state.items){
            return <span>Select a Character...</span>
        }
        const {items} = this.state;
        const {name} = items;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child)=>{
                        return React.cloneElement(child,{items})
                    })
    }
                </ul>
            </div>
        );
    }
}