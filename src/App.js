import React, { Component } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

/*function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {eventName: ''}
    this.downloadImage = this.downloadImage.bind(this);
  }
  downloadImage(){
     let PrithviImage = document.querySelector('.canvas');
     html2canvas(PrithviImage).then(canvas => {
     let imgData = canvas.toDataURL('image/png');
     console.log(imgData);
     let link = document.createElement("a");
     link.href = imgData;
     let imageStr = this.state.eventName.replace(' ','_');
    link.download = imageStr.toLowerCase();
    link.click();
});
    /* var link = document.createElement("a");
        
    link.href = document.getElementById('canvas').toDataURL();
    link.download = 'prithvi_image.jpg';
    link.click();*/
  }
  render() {
    return (
      <div className="App">
        <h1>Prithvi Image Generator</h1>
        Event Name: <input type="text" onChange={e => {this.setState({eventName: e.target.value})}} /><br /><br />
        <div id="canvas" className="canvas">
          <div className="canvas-text">{this.state.eventName}</div>
        </div>
        <br />
        <button onClick={this.downloadImage.bind(this)}>Download</button>
      </div>

    );
  }
}

export default App;
