import React from "react";
import Navigationbar from "./components/clicky";
import Character from "./components/Character";
import Charactersobject from "./characters.json";
import Wrapper from "./components/Wrapper";
import Randomarray from "./components/Random";

    let arr = [];
    while(arr.length < 9){
        let random = Math.floor(Math.random()*9);
        if(!arr.includes(random)){
            arr.push(random);
        }
        console.log("Array value: "+arr);
    }
    
    console.log("Array value: "+arr);

const App = () => [
    <Navigationbar />, 
    <Wrapper>
        <Character name={Charactersobject[arr[0]].name} image={Charactersobject[arr[0]].image} wand={Charactersobject[arr[0]].wand} house={Charactersobject[arr[0]].house} fontcolor={Charactersobject[arr[0]].color} />
        <Character name={Charactersobject[arr[1]].name} image={Charactersobject[arr[1]].image} wand={Charactersobject[arr[1]].wand} house={Charactersobject[arr[1]].house} fontcolor={Charactersobject[arr[1]].color} />
        <Character name={Charactersobject[arr[2]].name} image={Charactersobject[arr[2]].image} wand={Charactersobject[arr[2]].wand} house={Charactersobject[arr[2]].house} fontcolor={Charactersobject[arr[2]].color} />
        <Character name={Charactersobject[arr[3]].name} image={Charactersobject[arr[3]].image} wand={Charactersobject[arr[3]].wand} house={Charactersobject[arr[3]].house} fontcolor={Charactersobject[arr[3]].color} />
        <Character name={Charactersobject[arr[4]].name} image={Charactersobject[arr[4]].image} wand={Charactersobject[arr[4]].wand} house={Charactersobject[arr[4]].house} fontcolor={Charactersobject[arr[4]].color} />
        <Character name={Charactersobject[arr[5]].name} image={Charactersobject[arr[5]].image} wand={Charactersobject[arr[5]].wand} house={Charactersobject[arr[5]].house} fontcolor={Charactersobject[arr[5]].color} />
        <Character name={Charactersobject[arr[6]].name} image={Charactersobject[arr[6]].image} wand={Charactersobject[arr[6]].wand} house={Charactersobject[arr[6]].house} fontcolor={Charactersobject[arr[6]].color} />
        <Character name={Charactersobject[arr[7]].name} image={Charactersobject[arr[7]].image} wand={Charactersobject[arr[7]].wand} house={Charactersobject[arr[7]].house} fontcolor={Charactersobject[arr[7]].color} />
        <Character name={Charactersobject[arr[8]].name} image={Charactersobject[arr[8]].image} wand={Charactersobject[arr[8]].wand} house={Charactersobject[arr[8]].house} fontcolor={Charactersobject[arr[8]].color} />        
    </Wrapper>
];
    

export default App;
