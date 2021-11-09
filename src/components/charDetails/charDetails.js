import React, {Component} from 'react';
import GotService from '../../service/service';


import './charDetails.css';

export default class CharDetails extends Component {
    GotService = new GotService();
    
    state = {
        Character : null
    }
componentDidMount(){
    console.log('mountin', this.state.Character);
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
    

    console.log('update', charId);
    this.GotService.getCharacter(charId)
    .then(Character => this.setState({Character}));
}

    


    render() {
        if (!this.state.Character){
            return <span>Select a Character...</span>
        }
        const {name, gender, born, died, culture} = this.state.Character;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}