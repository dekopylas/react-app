import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/characterPage';
import BooksPage from '../boksPage/boksPage';
import GotService from '../../service/service';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
    constructor(){
        super()
        this.state = {
            toggle : true
            
        };
        this.onToggle = this.onToggle.bind(this);
        
    }
    GotService = new GotService();
    onToggle (){
        this.setState ({
            toggle : !this.state.toggle
        })
        
        
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
               <CharacterPage/>
               <BooksPage/>
            </Container>
        </>
    );}
};

export default App;