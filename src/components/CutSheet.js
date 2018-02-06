import React, { Component } from "react";
import PropTypes from "prop-types";
import Cut from "./Cut";
import { BeefParts, LambParts } from "./cuts";

export default class CutSheet extends Component {
  constructor(props) {
    super(props);

    this.stubPartsData = [
      { name: "rib", userText: "100$" },
      { name: "rump", disabled: true },
      { name: "hindshank", userText: "25 $/pc" }
    ];

    this.state = {
      sheets: [
        { type: "beef", parts: BeefParts },
        { type: "pork", parts: [] },
        { type: "lamb", parts: LambParts }
      ],
      hoveredPart: null
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(cut) {
    this.setState({
      hoveredPart: Object.assign({}, cut)
    });
  }

  render() {
    const { cutSheetType, theme } = this.props;

    const cutSheet = this.state.sheets.find(cutSheet => {
      return cutSheet.type === cutSheetType;
    });

    const parts = (cutSheet && cutSheet.parts) || [];

    //draft
    const partsData = this.props.partsData || this.stubPartsData;

    var hoveredPartName, hoveredPartUserText;

    if (this.state.hoveredPart && this.state.hoveredPart.name) {
      hoveredPartName = this.state.hoveredPart.name.toUpperCase();
      let userData = partsData.find(p => {
        return p.name === this.state.hoveredPart.name;
      });
      if (userData && userData.userText) {
        hoveredPartUserText = userData.userText;
      }
    }

    return (
      <div
        className="cut-sheet-container"
        style={{ backgroundColor: theme.backgroundColor }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
          <g
            fill="#61DAFB"
            transform="translate(0.000000,413.000000) scale(0.100000,-0.100000)"
          >
            {parts.map((part, index) => {
              const userData = partsData.find(p => {
                return p.name === part.name;
              });
              const partData = { ...part, ...(userData || {}) };

              let cutColor = theme.defaultCutColor;
              if (part.selected) {
                cutColor = theme.selectedCutColor;
              }
              if (partData.disabled) {
                cutColor = theme.disabledCutColor;
              }

              return (
                <Cut
                  key={index}
                  path={partData.path}
                  title={partData.name}
                  fill={cutColor}
                  textColor={theme.textColor}
                  strokeColor={theme.strokeColor}
                  disabled={partData.disabled}
                  placeholders={partData.placeholders}
                  onHover={this.handleHover}
                />
              );
            })}
            <text
              x="3000"
              y="-3150"
              transform="translate(0.000000,413.000000) scale(1,-1)"
              fill={theme.textColor}
              fontSize="132"
              strokeWidth="0"
              textAnchor="middle"
            >
              {hoveredPartName}
            </text>
            <text
              x="3000"
              y="-2950"
              transform="translate(0.000000,413.000000) scale(1,-1)"
              fill={theme.textColor}
              fontSize="192"
              textAnchor="middle"
              strokeWidth="0"
            >
              {hoveredPartUserText}
            </text>
          </g>
        </svg>
      </div>
    );
  }
}

CutSheet.propTypes = {
  cutSheetType: PropTypes.string.isRequired,
  theme: PropTypes.object,
  partsData: PropTypes.array
};

CutSheet.defaultProps = {
  theme: {
    textColor: "",
    strokeColor: "",
    defaultCutColor: "",
    selectedCutColor: ""
  }
};
