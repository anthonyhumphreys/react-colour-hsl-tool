import React, { Component } from "react";
import { TwitterPicker } from "react-color";
import { Accordion, Button, Container, Grid, Header, Icon, Segment } from "semantic-ui-react";

class ColourScheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      color: { h: 27, s: 0.83, l: 0.82, a: 1 },
      colourScheme: {
        id: 0,
        color: { h: 209, s: 0.5, l: 0.5 },
      }
    };
    this.onChangeColor = this.onChangeColor.bind(this);
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
      
  onChangeColor(color, event) {
    this.setState({ color: color.hsl }, () => this.generateColorPickerForm());
  }

  render() {
    return (
      <Container fluid>
        <Segment style={{ margin: 15 }}>
          <Accordion fluid styled>
            {this.generateColorPickerForm()}
          </Accordion>
          <Segment basic style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Header>Select a colour, or enter a hex value, to generate a palette</Header>
            <TwitterPicker
              width="315px"
              color={this.state.color}
              colors={['#f44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B']}
              onChange={this.onChangeColor}
            />
            <Button
              positive
              large
              style={{ marginTop: 30 }}
            >
              Save
            </Button>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

ColourScheme.propTypes = {};

export default ColourScheme;
