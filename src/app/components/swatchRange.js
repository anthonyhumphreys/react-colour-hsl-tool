import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
import Swatch from './swatch'

class SwatchRange extends Component{
    constructor(props){
        super(props);
        this.state = {
            swatchArray: []
        }
    }
    componentWillMount(){
        this.calculateSwatchArray();
    }
    componentDidUpdate(prevProps){
        if(this.props.startingPoint.h !== prevProps.startingPoint.h){
            this.calculateSwatchArray();
        }
    }
    calculateSwatchArray(){
        var lightnessArray = [10,20,30,40,50,60,70,80,90,95]

        var swatchArray = lightnessArray.map((lightness) => {
            return <Swatch key={lightness} color={{h:this.props.startingPoint.h, s:50+Math.abs(50-lightness)+"%",l:lightness+"%", a:1}}/>
        })
        swatchArray = swatchArray.reverse();
        this.setState({swatchArray});
    }
    render(){
        
        return(
            <Container>
                {this.state.swatchArray}
            </Container>
        );
    }
}

SwatchRange.propTypes = {}

export default SwatchRange;