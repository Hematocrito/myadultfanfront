import React from "react";
import AvatarEditor from "react-avatar-editor";

export default class Main extends React.Component {
  state = {
    image: "",
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: -1,
    rotate: 0,
    borderRadius: 50,
    preview: null,
    width: 200,
    height: 200
  };

  handleNewImage = async e => {
    await this.setState({ image: e.target.files[0] });
  };

  handleSave = data => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    const rect = this.editor.getCroppingRect();

    this.setState({
      preview: {
        img,
        rect,
        scale: this.state.scale,
        width: this.state.width,
        height: this.state.height,
        borderRadius: this.state.borderRadius
      }
    });
  };

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  // handleAllowZoomOut = ({ target: { checked: allowZoomOut } }) => {
  //   this.setState({ allowZoomOut })
  // }

  rotateLeft = e => {
    e.preventDefault();
    this.setState({
      rotate: this.state.rotate - 90
    });
  };

  rotateRight = e => {
    e.preventDefault();
    this.setState({
      rotate: this.state.rotate + 90
    });
  };

  // handleBorderRadius = e => {
  //   const borderRadius = parseInt(e.target.value)
  //   this.setState({ borderRadius })
  // }

  handleXPosition = e => {
    const x = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, x } });
  };

  handleYPosition = e => {
    const y = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, y } });
  };

  // handleWidth = e => {
  //   const width = parseInt(e.target.value)
  //   this.setState({ width })
  // }

  // handleHeight = e => {
  //   const height = parseInt(e.target.value)
  //   this.setState({ height })
  // }

  logCallback(e) {
    // eslint-disable-next-line
    console.log("callback", e);
  }

  setEditorRef = (editor) => {
    if (editor) {
      this.editor = editor;
    }
  };

  handlePositionChange = position => {
    this.setState({ position });
  };

  onClickSave = () => {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage()
      const canvas2 = canvas.toDataURL()
      console.log("Canvas "+canvas.toDataURL())
      localStorage.setItem("newImage", canvas2)
      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this.editor.getImageScaledToCanvas()
    }
  }

  render() {
    return (
      <div>
        <div className="ml-12">
          <AvatarEditor
            ref={this.setEditorRef}
            scale={parseFloat(this.state.scale)}
            width={this.state.width}
            height={this.state.height}
            position={this.state.position}
            onPositionChange={this.handlePositionChange}
            rotate={parseFloat(this.state.rotate)}
            borderRadius={this.state.width / (100 / this.state.borderRadius)}
            onLoadFailure={this.logCallback.bind(this, "onLoadFailed")}
            onLoadSuccess={this.logCallback.bind(this, "onLoadSuccess")}
            onImageReady={this.logCallback.bind(this, "onImageReady")}
            image={this.state.image}
          />
        </div>
        <br />
        New File:
        <input type="file" onChange={this.handleNewImage} />
        <br />
        Zoom:
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />        
        <button className='bg-blue-500 ml-9 mb-4 py-1 px-5 text-white' onClick={this.onClickSave}>Guardar</button>
        
      </div>
    );
  }
}
