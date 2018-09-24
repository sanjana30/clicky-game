import React from "react";
import Counter from "./Counter";

let Character = (props) => {
    const styles = {
        cardstyle : {
            width: 300,
            margin: 30
        },
        spanstyle: {
            color: props.fontcolor,
            fontWeight: "bolder"
        },
        cardbodystyle : {
            background: "#D3D3D3"
        }
    }
    return (
        <div className="card" style={styles.cardstyle}>
            <img className="card-img-top" src={props.image} alt={props.name} />
                <div className="card-body" style={styles.cardbodystyle}>
                    <p className="card-text">
                    Name: <span style={styles.spanstyle}>{props.name}</span>
                    <br />
                    House: <span style={styles.spanstyle}>{props.house}</span>
                    <br />
                    Wand: <span style={styles.spanstyle}>{props.wand}</span>
                    </p>
                    <button onClick={()=>props.changescore(props.id)}>Click Me</button>
                </div>
        </div>
    )    
};
        
export default Character;