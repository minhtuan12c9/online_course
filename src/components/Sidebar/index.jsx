import React, { useState } from "react";

const FixedAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const styles = {
    accordion: {
      position: "sticky",
      position: "-webkit-sticky",
      top: 0,
      left: 0,
      width: "250px",
      backgroundColor: "#f8f9fa",
      borderRight: "1px solid #dee2e6", // Adds a border on the right
      padding: "1rem", // Adds padding inside the accordion
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
      maxHeight: "100vh",
      overflowY: "auto",
    },
    accordionItem: {
      borderBottom: "1px solid #dee2e6",
    },
    accordionHeader: {
      margin: 0,
    },
    accordionButton: (isActive) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "1rem",
      fontSize: "1rem",
      fontWeight: 400,
      textAlign: "left",
      backgroundColor: isActive ? "#e9ecef" : "white",
      border: "none",
      outline: "none",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    }),
    accordionCollapse: (isActive) => ({
      display: isActive ? "block" : "none",
      padding: "1rem",
      backgroundColor: "#f8f9fa",
    }),
    accordionBody: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  };

  return (
    <div style={styles.accordion}>
      {/* Accordion Item #1 */}
      <div style={styles.accordionItem}>
        <h2 style={styles.accordionHeader}>
          <button style={styles.accordionButton(activeAccordion === 1)} onClick={() => toggleAccordion(1)}>
            Accordion Item #1
          </button>
        </h2>
        <div style={styles.accordionCollapse(activeAccordion === 1)}>
          <div style={styles.accordionBody}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
          </div>
        </div>
      </div>

      {/* Accordion Item #2 */}
      <div style={styles.accordionItem}>
        <h2 style={styles.accordionHeader}>
          <button style={styles.accordionButton(activeAccordion === 2)} onClick={() => toggleAccordion(2)}>
            Accordion Item #2
          </button>
        </h2>
        <div style={styles.accordionCollapse(activeAccordion === 2)}>
          <div style={styles.accordionBody}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
          </div>
        </div>
      </div>

      {/* Accordion Item #3 */}
      <div style={styles.accordionItem}>
        <h2 style={styles.accordionHeader}>
          <button style={styles.accordionButton(activeAccordion === 3)} onClick={() => toggleAccordion(3)}>
            Accordion Item #3
          </button>
        </h2>
        <div style={styles.accordionCollapse(activeAccordion === 3)}>
          <div style={styles.accordionBody}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
            overflow.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedAccordion;
