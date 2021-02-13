import React from 'react';



class Card extends React.Component {
    render() {
      return <div>
                
                <h1 className="">{this.props.title}</h1>
                <p>{this.props.description}</p>
                <small>{this.props.price}</small>
             </div>
    }
  }


  export default Card