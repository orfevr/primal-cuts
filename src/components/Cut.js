import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Cut extends Component {
    constructor(){
        super();
        this.state = {
            isActive: false
        }
    }
    
    render(){
        const text = this.props.placeholders && this.props.placeholders.description ?
            <text x={this.props.placeholders.description.x} y={this.props.placeholders.description.y} transform="translate(0.000000,413.000000) scale(1,-1)" fill={this.props.textColor} fontSize="152" strokeWidth="0">{this.props.title}</text> :
            '';
        const price = this.props.placeholders && this.props.placeholders.price ?
            <text x={this.props.placeholders.price.x} y={this.props.placeholders.price.y} transform="translate(0.000000,413.000000) scale(1,-1)" fill={this.props.textColor} fontSize="152" strokeWidth="0">{this.props.price}</text> :
            '';
        
        return (
            <g fill={ this.props.fill || '#61DAFB'} 
                stroke={this.props.strokeColor} 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="50"
                strokeWidth={ this.state.isActive ? 15 : 0}
                onClick={()=>{
                    //this.setState({isActive:!this.state.isActive});
                    console.log('Selceted part: ' + this.props.title);
                    }}
                onMouseEnter={() => {
                    if (!this.props.disabled) {
                        this.props.onHover({ name: this.props.title });
                        this.setState({ isActive: true })
                    }
                }}
                onMouseLeave={() => {
                    if (!this.props.disabled) {
                        this.props.onHover(null);
                        this.setState({ isActive: true })
                    }

                    this.setState({ isActive: false })
                }}>
                <path d={this.props.path} />
                {text}
                {price}
            </g>
        )
    }
}

Cut.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    strokeColor: PropTypes.string,
    fill: PropTypes.string
}