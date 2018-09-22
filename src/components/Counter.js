import React from "react";
import Character from "./Character";

class Counter extends React.Component{
    state = {
        count: 0
    };
    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
        alert("clicked");
    };
    render (){
        return (
            <Character count={this.state.count} increment={this.handleIncrement}/>
        )
    }
};

export default Counter;