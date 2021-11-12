import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import GotService from '../../service/service';
import Error from '../error/error';

export default class HousesPage extends Component {
    state = {
        selectItem : 3,
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
                itemsLoader = {this.GotService.getAllHouses}
                renderItem ={({name, region})=>`${name} (${region})`}
                />
            </Col>
            <Col md='6'>
                <CharDetails 
                    charId = {this.state.selectItem}
                    onItemsLoad = {this.GotService.getHouse}>
                    <Field field='region' label='region'/>
                    <Field field='currentLord' label='currentLord'/>
                    <Field field='words' label='words'/>
                    
                </CharDetails>
            </Col>
        </Row>
        </>
        )
    }
}