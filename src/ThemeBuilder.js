import React, { Component } from 'react'

export default class ThemeBuilder extends Component {
    render() {
        const {
            onDefaultCutColorChange,
            onDisabledCutColorChange,
            onSelectedCutColorChange,
            onTextColorChange,
            onBackgroundColorChange,
            onStrokeColorChange
        } = this.props;
        const colors = [
            '#f44336', '#ffeb3b', '#8bc34a',
            '#9e9e9e', '#2196f3', '#ff5722',
            'black', 'white', '#4caf50', 
            '#795548', '#ffc107', 'pink', 
            '#9c27b0', '#607d8b', '#03a9f4'];

        return (
            <div>
                <div className="color-picker-container">
                    <span>Sheet Background Color: </span>
                    {['black', 'white'].map((color, index) => {
                        return (
                            <button className="color-picker" 
                                    style={{ background: color }} 
                                    value={color}
                                    onClick={(e)=>onBackgroundColorChange(e.target.value)}></button>
                        );
                    })}
                    <span>Text Color: </span>
                    {['black', 'white'].map((color, index) => {
                        return (
                            <button className="color-picker" 
                                    style={{ background: color }} 
                                    value={color}
                                    onClick={(e)=>onTextColorChange(e.target.value)}></button>
                        );
                    })}
                </div>
                <div className="color-picker-container">
                    <span>Cut Color: </span>
                    {colors.map((color, index) => {
                        return (
                            <button className="color-picker" 
                                    style={{ background: color }} 
                                    value={color}
                                    onClick={(e) => onDefaultCutColorChange(e.target.value)}></button>
                        );
                    })}
                </div>
                <div className="color-picker-container">
                    <span>Selected Cut Color: </span>
                    {colors.map((color, index) => {
                        return (
                            <button className="color-picker" 
                                    style={{ background: color }} 
                                    value={color}
                                    onClick={(e)=>onSelectedCutColorChange(e.target.value)}></button>
                        );
                    })}
                </div>
                <div className="color-picker-container">
                    <span>Disabled Cut Color: </span>
                    {colors.map((color, index) => {
                        return (
                            <button className="color-picker" 
                                    style={{ background: color }} 
                                    value={color}
                                    onClick={(e)=>onDisabledCutColorChange(e.target.value)}></button>
                        );
                    })}
                </div>
                <div className="color-picker-container">
                    <span>Stroke Cut Color: </span>
                    {colors.map((color, index) => {
                        return (
                            <button className="color-picker" 
                                    style={{ background: color }} 
                                    value={color}
                                    onClick={(e)=>onStrokeColorChange(e.target.value)}></button>
                        );
                    })}
                </div>
                
            </div>)
    }
}