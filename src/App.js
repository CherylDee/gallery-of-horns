import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import HornedBeast from './HornedBeast';


class App extends React.Component {
  render() {
    return (
    <>
      <Header />
      <Main />
      <HornedBeast />
      <Footer />
    </>
    )
  }
}

export default App;
