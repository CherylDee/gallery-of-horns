import React from "react";


class HornedBeast extends React.Component {
  render() {
   
    return (
      <>
      <section>
      <h2>Gallery of Beasts</h2>

        <h3>{this.props.title}</h3>
        <img src={this.props.image_url} alt={this.props.alt} 
        title={this.props.title}/>
        <p>{this.props.description}</p>
      </section>
      </>
    )
  }
}

export default HornedBeast;