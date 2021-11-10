import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import GotService from '../../service/service';
import Error from '../error/error';

export default class CharacterPage extends Component{
    state = {
        selectItem : 130,
        error : false
    }
    GotService = new GotService();
    componentDidCatch(){
        this.setState ({error : true})
    }
    changeCharacter = (i)=>{
        this.setState({selectItem : i})
    }
    render(){
        if (this.state.error){
            return <Error/>
        }
        return (
            <> <Row>
            <Col md='6'>
                <ItemList
                changeCharacter = {this.changeCharacter}
                itemsLoader = {this.GotService.getAllCharacters}
                renderItem ={({name, gender})=>`${name} (${gender})`}
                />
            </Col>
            <Col md='6'>
                <CharDetails 
                    charId = {this.state.selectItem}>
                    <Field field='gender' label='gender'/>
                    <Field field='born' label='born'/>
                    <Field field='died' label='died'/>
                    <Field field='culture' label='culture'/>
                </CharDetails>
            </Col>
        </Row>
        </>
        )
    }
}