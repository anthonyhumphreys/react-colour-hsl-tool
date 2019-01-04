import React, { Component } from "react";
import { TwitterPicker, HuePicker } from "react-color";
import { Accordion, Button, Container, Grid, Header, Icon, Segment } from "semantic-ui-react";
import Swatch from "../components/swatch";
import SwatchRange from "../components/swatchRange"
class ColourScheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      color: { h: 27, s: "50%", l: "50%", a: 1 },
      
    };
   
    this.handleHueChange = this.handleHueChange.bind(this);
   
  }

  handleHueChange(color, event){
    color.hsl.h = Math.round(color.hsl.h);
    color.hsl.s = 50 + "%";
    color.hsl.l = 50 + "%";
    color.hsl.a = 1;
   
    this.setState({color: color.hsl});
  }

  render() {
    return (
      <Container fluid>
        <Segment style={{ margin: 15 }}>
          Select a Hue:
          <HuePicker
            onChange={this.handleHueChange}
            color={this.state.color}
          />
          Selected Hue:
          <Swatch color={this.state.color}/>
          
          Calculated Range:
          <SwatchRange startingPoint={this.state.color}/>
          
          
        </Segment>
      </Container>
    );
  }
}

ColourScheme.propTypes = {};

export default ColourScheme;
