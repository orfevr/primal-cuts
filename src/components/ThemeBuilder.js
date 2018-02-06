import React from "react";

const ColorPicker = ({ title, colors, onColorChange }) => {
  return (
    <div className="color-picker-container">
      <span>{title}: </span>
      {colors.map((color, index) => {
        return (
          <button
            key={index}
            className="color-picker"
            style={{ background: color }}
            value={color}
            onClick={e => onColorChange(e.target.value)}
          />
        );
      })}
    </div>
  );
};

const ThemeBuilder = props => {
  const {
    onDefaultCutColorChange,
    onDisabledCutColorChange,
    onSelectedCutColorChange,
    onTextColorChange,
    onBackgroundColorChange,
    onStrokeColorChange
  } = props;

  const colors = [
    "#f44336",
    "#ffeb3b",
    "#8bc34a",
    "#9e9e9e",
    "#2196f3",
    "#ff5722",
    "black",
    "white",
    "#4caf50",
    "#795548",
    "#ffc107",
    "pink",
    "#9c27b0",
    "#607d8b",
    "#03a9f4"
  ];

  return (
    <div>
      <ColorPicker
        title="Sheet Background Color"
        colors={["black", "white"]}
        onColorChange={onBackgroundColorChange}
      />
      <ColorPicker
        title="Text Color"
        colors={["black", "white"]}
        onColorChange={onTextColorChange}
      />
      <ColorPicker
        title="Cut Color"
        colors={colors}
        onColorChange={onDefaultCutColorChange}
      />
      <ColorPicker
        title="Selected Cut Color"
        colors={colors}
        onColorChange={onSelectedCutColorChange}
      />
      <ColorPicker
        title="Disabled Cut Color"
        colors={colors}
        onColorChange={onDisabledCutColorChange}
      />
      <ColorPicker
        title="Stroke Cut Color"
        colors={colors}
        onColorChange={onStrokeColorChange}
      />
    </div>
  );
};

export default ThemeBuilder;
