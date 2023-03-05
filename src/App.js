import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from './data/data.json';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: data,
      showModal: false,
      selectedBeast: '',
      title: '',
      image_url: '',
      description: '',
      horns: ''
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

  // handleClick = (event) => {
  //   let selected = event.target.value
  //   if (selected === "1") {
  //     let newData = data.filter(beast => beast.horns === 1)
  //     this.setState({
  //       beast: newData
  //     })
  //   }
  //   else if (selected === "2") {
  //     let newData = data.filter(beast => beast.horns === 2)
  //     this.setState({
  //       beast: newData
  //   })
  // }
  //   else if (selected === "3") {
  //     let newData = data.filter(beast => beast.horns === 3)
  //     this.setState({
  //       beast: newData
  //   })
  // }
  //   else if (selected === "100") {
  //     let newData = data.filter(beast => beast.horns === 100)
  //     this.setState({
  //       beast: newData
  //   })
  // }
  //   else if (selected === "All") {
  //     this.setState({
  //       beast: data
  //   })

  // }


  handleOpenModal = (title, image_url, description, horns) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      horns: horns
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
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
        
      <Main data={this.state.beast}
        handleOpenModal={this.handleOpenModal}/>

      <SelectedBeast selectedBeast={this.state.beast}
        title={this.state.title}
        image_url={this.state.image_url}
        description={this.state.description}
        showModal={this.state.showModal}
        handleCloseModal={this.handleCloseModal}/>
      <Footer />
      
    </>
    )
  }
}

export default App;
