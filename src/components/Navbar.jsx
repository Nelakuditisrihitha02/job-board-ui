import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>JobFinder</h2>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#1f2937",
    padding: "15px 20px",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
};

export default Navbar;
