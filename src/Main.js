import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json'


class Main extends React.Component {
  render() {
    
    return (
      <>
      <main>
      <title>Horned Beasts</title>
      {data.map((beasts) => {
        return <HornedBeast name = {beasts.name} image_url = {beasts.image_url} alt= {beasts.alt} title = {beasts.title} p= {beasts.description} />

      })}
      </main>
      </>
    )
  }
}

export default Main;