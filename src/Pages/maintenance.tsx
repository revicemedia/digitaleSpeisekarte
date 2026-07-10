import React from "react";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  padding: "2rem",
};

const iconStyle: React.CSSProperties = {
  fontSize: "3rem",
  marginBottom: "0.5rem",
};

const MaintenancePage: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={iconStyle}>⚠️</div>
      <h1>Wartungsmodus</h1>
      <p>Diese Webseite befindet sich derzeit im Wartungsmodus.</p>
      <p>Betreiber wenden sich bitte an ihren Kundenberater.</p>
    </div>
  );
};

export default MaintenancePage;
