import React, { Component } from 'react'
import { connect } from 'react-redux'

import CutSheet from '../CutSheet';

class CutSheetContainer extends Component {
    render() {
        const sheetType = this.props.cutSheetType; 
        return (
            <div className="carcass-container">
                <div>{sheetType}</div>
                <CutSheet cutSheetType={sheetType} theme={this.props.theme} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { selectedCutSheetType, theme } = state;
    return {
        cutSheetType: selectedCutSheetType,
        theme
    }
}

export default connect(mapStateToProps)(CutSheetContainer);