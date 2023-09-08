import React, { useMemo } from "react";
import "./Dashboard.css";
import GoogleDriveIcon from "../dashboard_components/GoogleDriveIcon";
import RiskScoreArc from "../dashboard_components/RiskScoreArc";
import StorageQuotaArc from "../dashboard_components/StorageQuotaArc";
import FileTable from "../dashboard_components/FileTable";
import bytesToGB from "../../helper/bytesToGb";


const riskScoreToSeverity = (riskScore) => {
  if (riskScore <= 25) return "Low";
  if (riskScore <= 50) return "Medium";
  if (riskScore <= 75) return "High";
  return "Critical";
};

const Dashboard = ({ data }) => {
  const { totalUsage, limit, riskCounter, files } = data;
  const totalUsageGB = useMemo(()=>bytesToGB(totalUsage),[totalUsage]);
  const limitGB = useMemo(()=>bytesToGB(limit),[limit]);
  const riskScoreString = useMemo(()=>riskScoreToSeverity(riskCounter),[riskCounter]);
  const highRiskFiles = useMemo(()=>files?.filter((file) => file.riskscore === 1),[files]);
  const mediumRiskFiles = useMemo(()=>files?.filter((file) => file.riskscore === 0.5),[files]);
  const lowRiskFiles = useMemo(()=>files?.filter((file) => file.riskscore === 0),[files]);
  return (
    <div className="white-box">
      <div className="white-box__header flex-column ">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center ">
            <GoogleDriveIcon />
            <h2 className="white-box__title">GOOGLE DRIVE RISK REPORT</h2>
          </div>
          <div className="d-flex align-items-center">
            <div className="score">Risk Score</div>
            <div className="gray-box">{riskScoreString}</div>
          </div>
        </div>
        <hr className="black-hr" />
      </div>
      <div className="white-box__body justify-content-evenly">
          <RiskScoreArc percentage={riskCounter} />
          <StorageQuotaArc totalUsage={totalUsageGB} limit={limitGB} />
      </div>
        <hr className="black-hr" />
        <div className="white-box__body flex-column">
        {highRiskFiles?.length > 0 && (
          <>
            <h2 style={{ color: '#ff471a' }}>High Severity Files</h2>
            <FileTable data={highRiskFiles} />
          </>
        )}

        {mediumRiskFiles?.length > 0 && (
          <>
            <h2 style={{ color: '#f6961e' }}>Medium Severity Files</h2>
            <FileTable data={mediumRiskFiles} />
          </>
        )}

        {lowRiskFiles?.length > 0 && (
          <>
            <h2 style={{ color: '#ecdb23' }}>Low Severity Files</h2>
            <FileTable data={lowRiskFiles} />
          </>
        )}
   </div>
    </div>
  );
};

export default Dashboard;
