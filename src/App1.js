import React, { Component } from "react";

import Wrapper from "./components/Wrapper";
import Character from "./components/Character";
import Characters from "./characters.json";

class App1 extends React.Component {
    state = {
        char: Characters,
        score: 0
    };
    // shuffle() shuffles our array of characters
    shuffle = () => {
        console.log("shuffling");
        let a=this.state.char;
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        this.setState({char: a});
    };

    //shuffledSet = (a)

    // handleincrement = (id) => {
    //     // this.state.char.filter(object => object.id===id)
    //     if (clicks === 1) {
    //         this.setState({ score: this.state.score + 1 });
    //     }
    //     else {
    //         this.setState({ score: 0 })
    //     }
    // };

    render() {
        return (
            <Wrapper>
                {this.state.char.map(character => (
                    <Character 
                        shuffle = {this.shuffle}
                        id={character.id}
                        name={character.name}
                        wand={character.wand}
                        image={character.image}
                        fontcolor={character.color}
                        changescore={character.handleincrement}
                    />
                ))}
            </Wrapper>
        );
    }
        
};
export default App1;
