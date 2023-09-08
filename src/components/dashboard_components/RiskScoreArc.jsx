import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"

const RiskScoreArc = ({ percentage }) => (
    <ReactSpeedometer
    height={180}
    maxValue={100}
    value={percentage}
    valueFormat={"d"}
    customSegmentStops={[0, 25, 50, 75, 100]}
    segmentColors={["#6ad72d", "#ecdb23", "#f6961e", "#ff471a"]}
    currentValueText={"Risk Score: ${value} %"}
    labelFontSize='13px'
    textColor={"black"}
/>
  );


export default RiskScoreArc;
