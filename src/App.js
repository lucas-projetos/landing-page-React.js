import React, { Component } from 'react';
import { Header, SquadInfo, Members, Comentarios, Form, Footer } from './Components';
import Comments from './data/Comentarios';
import './assets/App.css'
import './assets/responsive.css'

class App extends Component {
  constructor() {
    super()
    this.comentarios = new Comments()
  }
  render(){
    return (
      <>
        <Header />
        <main>
          <SquadInfo />
          <Members />
          <Form comentarios={this.comentarios} />
          <Comentarios comentarios={this.comentarios} />
        </main>
        <Footer/>
      </>
    );
  }
}  

export default App;
/*
criar os subComponents da Main (introdução video integrantes )
tornar o css global ou criar um para cada component

brainstorm

comentarios com formulario utilizando banco de dados online 


material UI
*/