import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import data from './data/data.json'


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
      beast: data,
     }
  }

  handleClick = (event) =>  {
    let selected = event.target.value;
    let newData = data.filter(beast => {
      if (selected === 'All') {
        return beast;
      } else {
        return beast.horns === +selected
      }
    })
    this.setState({
      beast: newData
    })
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
      <Form>
        <Form.Select onChange = {this.handleClick}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
          <option value="All">All</option>
        </Form.Select>
      </Form>
      <Main data={this.state.beasts} 
      handleOpenModal={this.handleOpenModal}/>

      <SelectedBeast selectedBeast={this.state.beast} 
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
