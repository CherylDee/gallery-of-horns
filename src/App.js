import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';
import data from './data/data.json';
import Modal from 'react-bootstrap/Modal';


class App extends React.Component {
  constructor(props) {
     super(props);
     this.state =  {
      showModal: false,
      selectedBeast: '',
      title: '',
      image_url: '',
      description: '',
      horns: '',
     }
  }

  handleOpenModal = (title, image_url, description, horns) => {
    this.setState ({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
      horns: horns,
    })
  }
   
  handleCloseModal = () => {
    this.setState ({
      showModal: false,

    })
  }

  render() {
    return (
    <>
      <Header />
      <Main data={this.state.beasts} 
      handleOpenModal={this.handleOpenModal}/>
      <SelectedBeast selectedBeast={this.state.beasts} 
      title = {this.state.title}
      image_url={this.state.image_url} 
      description = {this.state.description} 
      horns = {this.state.horns} 
      openModal={this.state.showModal} 
      closeModal = {this.state.handleCloseModal} />
      <HornedBeast />
      <Footer />

      <Modal 
        show={this.state.showModal}
        onHide={this.handleCloseModal}>

    </Modal>
    </>
    )
  }
}

export default App;
