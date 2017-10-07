import React, { Component } from 'react'
import { connect } from 'react-redux'

import ThemeBuilder from '../components/ThemeBuilder'
import {
    setDefaultCutColor,
    setDisabledCutColor,
    setSelectedCutColor,
    setTextColor,
    setBackgroundColor,
    setStrokeColor
} from '../actions/actions'

class ThemeEditor extends Component {

    constructor(props) {
        super(props);

        this.handleDefaultColorChanged = this.handleDefaultColorChanged.bind(this);
        this.handleDisabledCutColorChanged = this.handleDisabledCutColorChanged.bind(this);
        this.handleSelectedCutColorChanged = this.handleSelectedCutColorChanged.bind(this);
        this.handleTextColorChanged = this.handleTextColorChanged.bind(this);
        this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
        this.handleStrokeColorChange = this.handleStrokeColorChange.bind(this);
    }

    handleDefaultColorChanged(color) {
        this.props.dispatch(setDefaultCutColor(color));
    }

    handleDisabledCutColorChanged(color) {
        this.props.dispatch(setDisabledCutColor(color));
    }

    handleSelectedCutColorChanged(color) {
        this.props.dispatch(setSelectedCutColor(color));
    }

    handleTextColorChanged(color) {
        this.props.dispatch(setTextColor(color));
    }

    handleBackgroundColorChange(color) {
        this.props.dispatch(setBackgroundColor(color));
    }

    handleStrokeColorChange(color) {
        this.props.dispatch(setStrokeColor(color));
    }

    render() {
        return (
            <ThemeBuilder onDefaultCutColorChange={this.handleDefaultColorChanged}
                onDisabledCutColorChange={this.handleDisabledCutColorChanged}
                onSelectedCutColorChange={this.handleSelectedCutColorChanged}
                onTextColorChange={this.handleTextColorChanged}
                onBackgroundColorChange={this.handleBackgroundColorChange}
                onStrokeColorChange={this.handleStrokeColorChange} />
        )
    }
}

const mapStateToProps = (state) => {
    const { theme } = state;
    return {
        theme
    }
}

export default connect(mapStateToProps)(ThemeEditor);