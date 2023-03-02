import React from "react";


class HornedBeast extends React.Component {
  render() {
   
    return (
      <>
      <section>
      
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
      <img src={this.props.image_url} alt={this.props.alt} 
      title={this.props.title}  id={this.props.id} keyword={this.props.keyword} horns={this.props.horns} description={this.props.description}/>
    </section>
      </>
    )
  }
}

export default HornedBeast;