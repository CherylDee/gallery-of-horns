import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
      <header>
        <h1>The Gallery of Horned Beasts</h1>
        
      </header>
        <main>
          <title>Horned Beasts</title>
          <img src = "../images/hornedbeasts.jpg" title="horned beasts" alt ="horned beasts"></img>
          <div>
          <h2>Name of Beasts</h2>
          <img src = "../images/beast[1].jpg" alt = "a beast"></img>            <p>Description....</p>
          </div>


        </main>


      
      <footer>&copy; Code Fellows</footer>
      
      
      
      
      
      </>
    )
  }
}

export default App;
