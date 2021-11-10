import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/characterPage';
import GotService from '../../service/service';
import Error from '../error/error';


class App extends Component {
    constructor(){
        super()
        this.state = {
            toggle : true,
            error : false
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
        if (this.state.error){
            return <Error/>
        }
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
            </Container>
        </>
    );}
};

export default App;