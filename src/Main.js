import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json'
import './Main.css';


class Main extends React.Component {
  render() {
    
    return (
      <>
      <main>
      <title>Horned Beasts</title>
    
      {data.map((beasts, idx) => {
        return <HornedBeast image_url = {beasts.image_url} alt = {beasts.alt} title = {beasts.title} description = {beasts.description}  id = {beasts._id} key = {idx} display={this.props.handleOpenModal} horns = {beasts.horns}/>
      })}
     
      </main>
      </>
    )
  }
}

export default Main;