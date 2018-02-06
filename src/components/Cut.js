import React, { Component } from "react";
import PropTypes from "prop-types";

class Cut extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  render() {
    const { disabled, title, fill, strokeColor, path, onHover } = this.props;

    
    const text = this.props.placeholders &&
      this.props.placeholders.description && (
        <text
          x={this.props.placeholders.description.x}
          y={this.props.placeholders.description.y}
          transform="translate(0.000000,413.000000) scale(1,-1)"
          fill={this.props.textColor}
          fontSize="152"
          strokeWidth="0"
        >
          {title}
        </text>
      );
    const price = this.props.placeholders &&
      this.props.placeholders.price && (
        <text
          x={this.props.placeholders.price.x}
          y={this.props.placeholders.price.y}
          transform="translate(0.000000,413.000000) scale(1,-1)"
          fill={this.props.textColor}
          fontSize="152"
          strokeWidth="0"
        >
          {this.props.price}
        </text>
      );


    return (
      <g
        fill={fill}
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="50"
        strokeWidth={this.state.isActive ? 15 : 0}
        onClick={() => {
          //this.setState({isActive:!this.state.isActive});
          console.log("Selected part: " + title);
        }}
        onMouseEnter={() => {
          if (!disabled) {
            onHover({ name: title });
            this.setState({ isActive: true });
          }
        }}
        onMouseLeave={() => {
          if (!disabled) {
            onHover(null);
            this.setState({ isActive: true });
          }

          this.setState({ isActive: false });
        }}
      >
        <path d={path} />
        {text}
        {price}
      </g>
    );
  }
}

Cut.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  strokeColor: PropTypes.string,
  fill: PropTypes.string,
  onHover: PropTypes.func
};

Cut.defaultProps = {
  title: "no title specified",
  disabled: false,
  path: "",
  fill: "#61DAFB",
  strokeColor: "FFF"
};

export default Cut;
