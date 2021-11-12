import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import GotService from '../../service/service';
import Error from '../error/error';

export default class BooksPage extends Component {
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
                itemsLoader = {this.GotService.getAllBooks}
                renderItem ={({name, authors})=>`${name} (${authors})`}
                />
            </Col>
            <Col md='6'>
                <CharDetails 
                    charId = {this.state.selectItem}
                    onItemsLoad = {this.GotService.getBook}>
                    <Field field='authors' label='authors'/>
                    <Field field='numberOfPages' label='numberOfPages'/>
                    
                </CharDetails>
            </Col>
        </Row>
        </>
        )
    }
}