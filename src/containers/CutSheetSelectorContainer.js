import React, { Component } from 'react'
import { connect } from 'react-redux'
import CutSheetSelector from '../components/CutSheetSelector'
import { selectCutSheetType } from '../actions/actions'

class CutSheetSelectorContainer extends Component {

    constructor(props) {
        super(props);
        this.handleCutSheetSelected = this.handleCutSheetSelected.bind(this);
    }

    handleCutSheetSelected(selectedCutSheetType) {
        this.props.dispatch(selectCutSheetType(selectedCutSheetType));
    }

    render() {
        return (
            <CutSheetSelector parts={['beef','lamb']} onCutSheetSelected={this.handleCutSheetSelected} selectedCutSheetType={this.props.selectedCutSheetType} />
        );
    }
}

const mapStateToProps = (state) => {
    const { selectedCutSheetType } = state;
    return {
        selectedCutSheetType: selectedCutSheetType
    };
}

export default connect(mapStateToProps)(CutSheetSelectorContainer);