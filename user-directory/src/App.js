import './App.css';
import React from 'react'
import {Component} from 'react'
import data from './data'

class App extends Component {

  constructor(){
    super()

    this.state= {
      id: 0,
      name: {first: '', last: ''},
      city: '',
      coutnry: '',
      title: '',
      favoriteMovies: []
    }
  }

  render(){
    return (
      <section className="App">
        <header className="App-header">
          <h1>Home</h1>
        </header>
        <main className='App-Main'>
          <section id='index-box'>
  
          </section>
          <section className='Button-Row'>
            <button id='previous'>{'< Previous'}</button>
            <button id='next'>{'Next >'}</button>
          </section>
        </main>
      </section>
    );
  }

}

export default App;
