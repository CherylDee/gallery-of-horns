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

  render() {
   
    return (
      <>
      <article className="beast">
      <img src={this.props.image_url} alt={this.props.alt} 
      title={this.props.title}  id={this.props.id} keyword={this.props.keyword} horns={this.props.horns} description={this.props.description}/>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
      <h4 onClick={this.handleHearts}>{this.state.hearts} ❤️ Favorite </h4>  
    </article>
      </>
    )
  }
}

export default HornedBeast;