import React from "react";
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0
    };
  }

  handleHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1,
    });
    
  }
  handleModal = () => {
    this.props.display(this.props.title, this.props.image_url, this.props.description, this.props.horns)
  }

  render() {
   
    return (
      <>
      <article className="beast">
      <img src={this.props.image_url} alt={this.props.alt} 
      title={this.props.title}  id={this.props._id} keyword={this.props.keyword} horns={this.props.horns} description={this.props.description} onClick={this.handleModal}/>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
      <h4 onClick={this.handleHearts}>{this.state.hearts}{"❤️"} Favorite </h4>  
    </article>
      </>
    )
  }
}

export default HornedBeast;