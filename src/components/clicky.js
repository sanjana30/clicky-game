import React from "react";
const styles = {
    navbar: {
        background: "#9370DB"
    },
    score : {
        justifyContent: "flex-end",
        color: "white"
    }
};

const Navigationbar = () => (<div style={styles.navbar}>
    <nav className="navbar navbar-light " style={styles.navbar}>
        <a className="navbar-brand">Clicky</a>
        <span style={styles.score}>Score: </span>
    </nav>
</div>
);
       
export default Navigationbar;
