// StatusBadge.jsx
import React from "react";

const getBadgeClass = (status) => {
  switch (status) {
    case "active":
      return "badge bg-success";
    case "pending":
      return "badge bg-warning text-dark";
    case "paid":
      return "badge bg-primary";
    case "warning":
      return "badge bg-danger";
    default:
      return "badge bg-secondary";
  }
};

const StatusBadge = ({ status }) => {
  return <span className={getBadgeClass(status)}>{status.toUpperCase()}</span>;
};

export default StatusBadge;
