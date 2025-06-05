// src/components/ui/card.jsx
import React from "react";

const Card = ({ title, children, footer }) => (
  <div className="card mb-3">
    {title && <div className="card-header">{title}</div>}
    <div className="card-body">{children}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);

export default Card;
