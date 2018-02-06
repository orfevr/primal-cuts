import React from "react";

const MeatSelectorBtn = ({ meatType, onCutSheetSelected }) => {
  return (
    <button
      key={meatType}
      className="tbd"
      value={meatType}
      onClick={e => onCutSheetSelected(e.target.value)}
    >
      {meatType}
    </button>
  );
};

const CutSheetSelector = ({ parts, onCutSheetSelected }) => {
  if (!parts) {
    return null;
  }
  if (!parts.length) {
    return <div>No Parts Available</div>;
  }
  return (
    <div>
      {parts.map((meatType, index) => (
        <MeatSelectorBtn
          {...{ meatType, onCutSheetSelected }}
        />
      ))}
    </div>
  );
};

export default CutSheetSelector;
