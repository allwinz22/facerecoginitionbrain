import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecoginition from './components/FaceRecoginition/FaceRecoginition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '0a9f8f65e73449ca940a5469b1e842f3'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      image: '',
      route: 'signin',
      isSignedIn: false,
    }
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  // onButtonSubmit = () => {
  //   this.setState({
  //     // imageUrl: this.state.input,
  //     input: ''
  //   })
  //   app.models
  //     .predict(
  //       Clarifai.FACE_DETECT_MODEL,
  //       'https://tvline.com/wp-content/uploads/2022/05/tom-brady-roast-netflix.png?w=620'
  //     )
  //     .then(response => {
  //       console.log('hi', response)
  //     })
  //     .catch(err => console.log("err", err))
  // }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        console.log('hi', response)
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'home'){
      this.setState({
        isSignedIn: true
      })
    }else {
      this.setState({
        isSignedIn: false
      })
    }
    this.setState({
      route: route
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        {(this.state.route === 'signin' || this.state.route === 'register') ?
          <div>
            {this.state.route === 'signin' ? 
              <SignIn onRouteChange={this.onRouteChange} /> :
              <Register onRouteChange={this.onRouteChange} />
            }
          </div>
          :
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              inputValue={this.state.input}
            />
            <FaceRecoginition imageUrl={this.state.image} />
          </div>
        }
        <ParticlesBg
          type="cobweb"
          bg={true}
          num={120}
          color={['#ffffff']}
        />
      </div>
    );
  }
}

export default App;
