import React from "react";
import './HornedBeast.css';


class HornedBeast extends React.Component {
  render() {
   
    return (
      <>
      <article className="beast">
      <img src={this.props.image_url} alt={this.props.alt} 
      title={this.props.title}  id={this.props.id} keyword={this.props.keyword} horns={this.props.horns} description={this.props.description}/>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
    </article>
      </>
    )
  }
}

export default HornedBeast;