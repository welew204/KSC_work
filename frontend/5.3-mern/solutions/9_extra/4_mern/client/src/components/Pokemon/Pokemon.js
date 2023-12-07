import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    return (
      <div className="Pokemon" onClick={this.props.onClick}>
        <div className={`Pokemon-image ${this.props.isFeinted ? 'Pokemon--fainted' : ''}`}>
          {
            this.props.isActive ? (
              <img className="Pokemon--active" src={this.props.data.img} />
            ) : (
              <img src={this.props.data.img} />
            )
          }
        </div>
        <p>{this.props.data.name}</p>
        <p><strong>Type:</strong> {this.props.data.type.join(', ')}</p>
      </div>
    );
  }
}

export default Pokemon;
