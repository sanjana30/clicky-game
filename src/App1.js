import React, { Component } from "react";
import Navigationbar from "./components/clicky";
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

    handlescore = (id) => {
        console.log("Id of clicked element: "+id);
        
        //store the clicked char object in a new var & increase the number of clicks
        let clickedChar = this.state.char.filter(object => object.id === id);
        console.log("No. of clicks before: "+clickedChar[0].clicks )
        clickedChar[0].clicks = clickedChar[0].clicks +1;
        console.log("No. of clicks after: "+clickedChar[0].clicks )
        //make a tempArr with all characters except the one clicked and then push the clickedChar with updated #clicks into it
        let tempArr = this.state.char.filter(object => object.id !== id);
        tempArr.push(clickedChar);
        //set state char to the tempArr with updated clicks
        this.setState({char: tempArr});
        console.log("----------");
        console.log(this.state.char);
        if(clickedChar[0].clicks === 1){
            this.setState({score: this.state.score +1}); 
        }
        else{
            const newchar = Characters.forEach(element => {
                element.clicks =0;
            });          
            this.setState({
                score: 0, 
                char: newchar
            });
            console.log("----------");
            console.log(newchar);
        }      
        this.shuffle();
    }

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
            [
            <Navigationbar score={this.state.score}/>,
            <Wrapper>
                {this.state.char.map(character => (
                    <Character 
                        shuffle = {this.shuffle}
                        id={character.id}
                        name={character.name}
                        wand={character.wand}
                        image={character.image}
                        fontcolor={character.color}
                        changescore={this.handlescore}
                    />
                ))}
            </Wrapper>
            ]
        );
    }
        
};
export default App1;
