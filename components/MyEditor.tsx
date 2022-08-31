import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactAvatarEditor from 'react-avatar-editor';
import { Nu } from "react-flags-select";

class MyEditor extends React.Component {
    state = {
        image: 'http://localhost:3000/assets/img/modelbg.jpg',
        allowZoomOut: false,
        position:{ x: 0.5, y: 0.5 },
        scale: -1,
        rotate: 0,
        borderRadius: 0,
        preview: null,
        width: 270,
        height: 120,
      }
      
    handleNewImage = (e:any) => {
    this.setState({ image: e.target.files[0] })
    }

    handleScale = (e:any) => {
        const scale = parseFloat(e.target.value)
        this.setState({ scale })
    }

    handlePositionChange = (position:any) => {
        this.setState({ position })
      }
    
  render() {
    return (
        <div>
            <div>
            <ReactAvatarEditor
              scale={Number(this.state.scale)}
              width={this.state.width}
              height={this.state.height}
              position={this.state.position}
              onPositionChange={this.handlePositionChange}
              rotate={Number(this.state.rotate)}
              borderRadius={this.state.width / (100 / this.state.borderRadius)}
              image={this.state.image}
              className="editor-canvas"
            />
            </div>
            <br />
            
            Zoom:
            <input
            name="scale"
            type="range"
            onChange={this.handleScale}
            min={this.state.allowZoomOut ? '0.1' : '1'}
            max="2"
            step="0.01"
            defaultValue="1"
            />
        </div>
      
    )
  }
}

export default MyEditor