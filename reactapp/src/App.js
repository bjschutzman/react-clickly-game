import React, { Component } from "react";
import Herocard from "./components/Herocard";
import Title from "./components/Title";
import Wraper from "./components/Wrapper";
import heros from "./heros.json";


class App extends Component {
    state = {
        heros,
        score: 0,
        highscore: 0
    };

    // add function that when picture is clicked and is/isnot correct increase/reset score, shuffle images
    // moveHero = id => {
    //     const heros = this.state.heros
    // }


   render() {
       return(
       <Wraper>
           <Title>Heros Click Game</Title>
           {this.state.heros.map(hero =>(
               <Herocard
               id = {heros.id}
               name = {heros.name}
               image = {hero.image}
               />
           ))}
       </Wraper>
       )
   }
}

export default App;


