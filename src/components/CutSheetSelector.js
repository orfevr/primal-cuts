import React, { Component } from 'react'

class CutSheetSelector extends Component {
    render() {
        return (
            <div>
                {['beef', 'pork', 'lamb', 'chicken'].map((meatType, index) => {
                    return (
                        <button key={meatType} className="tbd"
                            value={meatType}
                            onClick={(e) => this.props.onCutSheetSelected(e.target.value)}>{meatType}</button>
                    );
                })}
            </div>
        );
    }
}

export default CutSheetSelector;