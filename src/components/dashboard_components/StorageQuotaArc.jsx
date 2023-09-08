import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"

const StorageQuotaArc = ({ totalUsage, limit }) => (
    <ReactSpeedometer
    height={180}
    maxValue={100}
    value={Math.floor((totalUsage/limit)*100)}
    valueFormat={"d"}
    customSegmentStops={[0, 25, 50, 75, 100]}
    segmentColors={["#6ad72d", "#ecdb23", "#f6961e", "#ff471a"]}
    currentValueText={"Storage Used: ${value}%"+` (${totalUsage.toFixed(2)} GB of ${limit} GB)`}
    labelFontSize='13px'
    textColor={"black"}
/>
  );


export default StorageQuotaArc;
