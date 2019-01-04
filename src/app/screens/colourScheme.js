import React, { Component } from "react";
import { TwitterPicker, HuePicker } from "react-color";
import { Accordion, Button, Container, Grid, Header, Icon, Segment } from "semantic-ui-react";
import Swatch from "../components/swatch";
import SwatchRange from "../components/swatchRange"
class ColourScheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      color: { h: 27, s: "50%", l: "50%", a: 1 },
      colourScheme: {
        id: 0,
        color: { h: 209, s: 0.5, l: 0.5 },
      }
    };
   
    this.handleHueChange = this.handleHueChange.bind(this);
   
  }

  generateHsl = baseColour => {
    const spectrum = { 
      lightest: {
        h: baseColour.h,
        s: 0.9,
        l: 0.9,
      },
      light: {
        h: baseColour.h,
        s: 0.75,
        l: 0.75,
      },
      regular: {
        h: baseColour.h,
        s: 0.5,
        l: 0.5,
      },
      dark: {
        h: baseColour.h,
        s: 0.75,
        l: 0.25,
      },
      darkest: {
        h: baseColour.h,
        s: 0.9,
        l: 0.15,
       }
    };
  
    const spectrumElements = [];
  
    for (const key in spectrum) {
      spectrumElements.push(`hsl(${spectrum[key].h}, ${Math.floor(spectrum[key].s * 100)}%, ${Math.floor(spectrum[key].l * 100)}%)`)
    }
    
    return spectrumElements;
  };

  generateColorPickerForm() {
    return (
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        {
          this.generateHsl(this.state.colourScheme.color).map((colour) => <div
            style={{
              margin: "15px",
              height: "50px",
              width: "100px",
              backgroundColor: colour,
              boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
            }}
          />)
        }
      </div>
    );
  } 
  
  

  handleHueChange(color, event){
    color.hsl.h = Math.round(color.hsl.h);
    color.hsl.s = 50 + "%";
    color.hsl.l = 50 + "%";
    color.hsl.a = 1;
   
    this.setState({color: color.hsl}, () => this.generateColorPickerForm());
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
          <Accordion fluid styled>
            {this.generateColorPickerForm()}
          </Accordion>
          
        </Segment>
      </Container>
    );
  }
}

ColourScheme.propTypes = {};

export default ColourScheme;
