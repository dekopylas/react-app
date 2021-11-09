import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
// eslint-disable-next-line
import GotService from '../../service/service';


class App extends Component {
    constructor(){
        super()
        this.state = {
            toggle : true,
            select : 130
        };
        this.onToggle = this.onToggle.bind(this);
        this.changeCharacter = this.changeCharacter.bind(this);
    }
    onToggle (){
        this.setState ({
            toggle : !this.state.toggle
        })
        
        
    }
    changeCharacter = (i)=>{
        console.log(this.state.select);
        this.setState({select : 41 + i})
    }
    render(){
        const Wiew = this.state.toggle?<RandomChar/> : null;
    return (
        
        <> 
            <Container>
            
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {Wiew}
                        <button 
                        onClick = {this.onToggle} 
                        type="button" 
                        className="btn btn-outline-primary"
                        >
                            Toggle</button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList
                        changeCharacter = {this.changeCharacter} 
                        />
                    </Col>
                    <Col md='6'>
                        <CharDetails 
                        charId = {this.state.select}/>
                    </Col>
                </Row>
            </Container>
        </>
    );}
};

export default App;