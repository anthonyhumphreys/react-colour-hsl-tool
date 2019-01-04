import React, { Component } from "react";
import {Container} from 'semantic-ui-react';

class Swatch extends Component {
    constructor(props){
        super(props);
        
    }

   

    hslString(color){
        return `hsl(${color.h},${color.s},${color.l},${color.a})`
    }

    hslToHex(h, s, l) {
        
        s = s.replace("%", "");
        l = l.replace("%", "");
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;
        if (s === 0) {
          r = g = b = l; // achromatic
        } else {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          };
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }
        const toHex = x => {
          const hex = Math.round(x * 255).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      }

    render(){
        return(
            <Container style={{border: "1px solid black", padding: "5px"}}>

            <div 
                style={{
                    margin: "15px",
                    height: "50px",
                    width: "100px",
                    backgroundColor: this.hslString(this.props.color),
                    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.4)",
                    color: "white"
                    
                }}
                >
            </div>
            <p>{this.hslString(this.props.color)}</p>
            <p>{this.hslToHex(this.props.color.h,this.props.color.s,this.props.color.l)}</p>
            </Container>
        )
    }
}
Swatch.propTypes= {};
export default Swatch;