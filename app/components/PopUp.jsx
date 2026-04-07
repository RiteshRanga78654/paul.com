import React, { useState } from "react";

const placeholderImage = "/assets/images/corporate-trainings.png";

const PopUp = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://service.ireedindia.com/v1/contact-us",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            toEmail: "info@bhaswarpaul.com",
            url: "Bhaswar Paul Com",
          }),
        },
      );

      if (response.ok) {
        alert("Message sent successfully!");
        onClose();
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      alert("An error occurred. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeX} onClick={onClose}>
          &times;
        </button>

        
        <div style={{ ...styles.col, ...styles.imageCol }}>
          <img
            src={placeholderImage} 
            alt="Real Estate Professional"
            style={styles.image}
          />
         
          {/* <div style={styles.imageTextOverlay}>
            <p>IREED</p>
            <h3 style={{fontSize: '1.4rem'}}>Become a Certified Real Estate Professional</h3>
          </div> */}
        </div>

       
        <div style={{ ...styles.col, ...styles.formCol }}>
          <h2 style={styles.title}>
            Get in <span style={{ color: "#fff" }}>Touch</span>
          </h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            {["name", "email", "mobile"].map((field) => (
              <div key={field} style={styles.inputGroup}>
                <input
                  required
                  type={
                    field === "email"
                      ? "email"
                      : field === "mobile"
                        ? "tel"
                        : "text"
                  }
                  name={field}
                  style={{
                    ...styles.input,
                    ...(focusedField === field ? styles.inputFocus : {}),
                  }}
                
                  placeholder={
                    field === "name"
                      ? "Full Name"
                      : field === "email"
                        ? "Email Address"
                        : "Mobile Number"
                  }
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            ))}

            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? "Sending..." : "SUBMIT MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ... keep previous CSS, with new additions for columns
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    display: "flex", // Crucial for left/right layout
    flexDirection: "row", // Horizontal
    backgroundColor: "#1e1e1e",
    borderRadius: "12px",
    border: "1px solid #b79660",
    width: "90%",
    maxWidth: "850px", // Wider to accommodate two cols
    position: "relative",
    overflow: "hidden", // Required for image
    boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
  },
  col: { flex: 1 }, // Both cols take equal width
  imageCol: { position: "relative" },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    padding: "10px",
  },
  imageTextOverlay: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "1px",
    backgroundColor: "rgba(30, 30, 30, 0.7)",
    padding: "15px",
    borderRadius: "4px",
  },
  formCol: { padding: "50px 40px", textAlign: "center" },
  closeX: {
    position: "absolute",
    top: "15px",
    right: "20px",
    background: "none",
    border: "none",
    color: "#b79660",
    fontSize: "30px",
    cursor: "pointer",
    zIndex: 10,
  },
  title: {
    color: "#b79660",
    fontSize: "2rem",
    marginBottom: "30px",
    letterSpacing: "1px",
  },
  form: { display: "flex", flexDirection: "column", gap: "20px" },
 inputGroup: { width: "100%", position: "relative" },
  input: {
    width: "100%",
    padding: "15px",
    backgroundColor: "transparent",
    border: "none",
    
    // --- FIX START: Replace shorthand with longhand ---
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "#333", 
    // --- FIX END ---

    color: "#fff",
    outline: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  },
  inputFocus: { 
    // Now this matches the property type in the base 'input' style
    borderBottomColor: "#b79660" 
  },
  submitBtn: {
    marginTop: "30px",
    padding: "18px",
    backgroundColor: "#b79660",
    color: "#1e1e1e",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 20px rgba(183, 150, 96, 0.3)",
    "&:hover": { transform: "translateY(-2px)" },
  },
};

export default PopUp;
