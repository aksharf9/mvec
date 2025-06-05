// DashboardCard.jsx
import React from "react";
import StatusBadge from "./StatusBadge";

const DashboardCard = ({ title, value, status }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <h3 className="card-text fw-bold">{value}</h3>
          <StatusBadge status={status} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
