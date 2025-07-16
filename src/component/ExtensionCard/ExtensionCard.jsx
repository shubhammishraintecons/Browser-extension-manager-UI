// src/components/ExtensionCard.jsx
import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import lens from '../../assets/images/icon-sun.svg'



const ExtensionCard = ({ logo, name, description, isActive }) => {
  const [enabled, setEnabled] = useState(isActive);

  const handleToggle = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <div style={styles.card}>
      <div style={styles.infoSection}>
        <div style={styles.iconBox}>
          <img src={logo} alt={name} style={{ width: "50px" }} />
        </div>
        <div>
          <h4 style={styles.title}>{name}</h4>
          <p style={styles.desc}>{description}</p>
        </div>
      </div>

      <div style={styles.actions}>
        <button style={styles.removeBtn}>Remove</button>
        <ToggleSwitch isActive={enabled} handleToggle={handleToggle} />
      </div>
    </div>


  );
};

export default ExtensionCard;

// inline styles for simplicity
const styles = {
  card: {
    backgroundColor: "#1a1b2f",
    color: "#fff",
    borderRadius: "12px",
    padding: "16px",
    width: "100%",
    maxWidth: "500px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    marginTop:"20px",
  },
  infoSection: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  iconBox: {
    backgroundColor: "#2c2f4a",
    width: "48px",
    height: "48px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
  },
  desc: {
    margin: 0,
    fontSize: "13px",
    color: "#ccc",
  },
  actions: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  removeBtn: {
    backgroundColor: "#2c2f4a",
    border: "none",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
