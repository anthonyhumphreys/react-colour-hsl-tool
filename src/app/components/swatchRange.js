import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
import Swatch from './swatch'

class SwatchRange extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Swatch color={this.props.startingPoint}/>
            </Container>
        );
    }
}

SwatchRange.propTypes = {}

export default SwatchRange;