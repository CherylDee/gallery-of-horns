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
    
      {data.map((beasts) => {
        return <HornedBeast image_url = {beasts.image_url} alt= {beasts.alt} title = {beasts.title} description = {beasts.description} />
      })}
     
      </main>
      </>
    )
  }
}

export default Main;