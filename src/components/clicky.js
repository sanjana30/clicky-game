import React from "react";
const styles = {
    navbar: {
        background: "#9370DB",
        marginBottom: 40
    },
    score : {
        justifyContent: "flex-end",
        color: "white"
    }
};

const Navigationbar = (props) => (
<div style={styles.navbar}>
    <nav className="navbar navbar-light fixed-top" style={styles.navbar}>
        <a className="navbar-brand">Clicky</a>
        <span style={styles.score}>Score: {props.score} </span>
    </nav>
</div>
);
       
export default Navigationbar;
