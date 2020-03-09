import React from 'react';
import './App.css';
import Wrapper from "./component/Wrapper";
import Animation from "./component/Animation";
import AnimationGoku from "./component/Goku";
import AnimationVegeta from "./component/Vegeta";
import AnimationVegito from "./component/Vegito";
import AnimationDeku from "./component/Deku";
import Games from "./component/Games";
import GamesKazuya from "./component/Kazuya";
import GamesCortex from "./component/Cortex";
import GamesSonic from "./component/Sonic";
import GamesMcCree from "./component/McCree";
import Television from "./component/Television";
import TelevisionMichaelScott from "./component/MichaelScott";
import TelevisionDwight from "./component/Dwight";
import TelevisionJim from "./component/Jim";
import TelevisionPam from "./component/Pam";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

    const pageAlign = {
        width: "100vw",
        display: "flex",
        justifyContent: "space-evenly"
    };

    return (

        <Router>
            <div style={pageAlign}>
                <Switch>
                    <Route exact path={"/"} component={Wrapper}/>
                    <Route path='/Animation' component={Animation}/>
                    <Route path='/AnimationGoku' component={AnimationGoku}/>
                    <Route path='/AnimationVegeta' component={AnimationVegeta}/>
                    <Route path='/AnimationVegito' component={AnimationVegito}/>
                    <Route path='/AnimationDeku' component={AnimationDeku}/>
                    <Route path='/Games' component={Games}/>
                    <Route path='/GamesKazuya' component={GamesKazuya}/>
                    <Route path='/GamesCortex' component={GamesCortex}/>
                    <Route path='/GamesSonic' component={GamesSonic}/>
                    <Route path='/GamesMcCree' component={GamesMcCree}/>
                    <Route path='/Television' component={Television}/>
                    <Route path='/TelevisionMichaelScott' component={TelevisionMichaelScott}/>
                    <Route path='/TelevisionDwight' component={TelevisionDwight}/>
                    <Route path='/TelevisionJim' component={TelevisionJim}/>
                    <Route path='/TelevisionPam' component={TelevisionPam}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

