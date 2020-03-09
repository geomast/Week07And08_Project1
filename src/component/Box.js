import React from 'react';
import {Link} from "react-router-dom";


function Box(props) {
    const boxDesign = {
        margin: "5px",
        paddingBottom: "5px",
        height: "404px",
        width: "250px",
        backgroundColor: "white",
        border:"3px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textDecoration: "none",
        color: "Black"
    };

    const imgSize = {
        paddingTop: props.vP,
        paddingBottom: props.vP,
        height: props.iH,
        width: props.iW
    };

    const bS = {
        fontWeight: "Bold"
    };

    const nM = {
        margin: "0px"
    };

    return (
        <Link to={props.fPL} style={boxDesign}>
            <img src={props.image} alt="A broken link which is meant to display a FunkoPop."  style={imgSize}/>
            <h1 style={nM}>Name:<br/>{props.name}</h1>
            <p style={bS}>Category:<br/>{props.cat}<br/><br/>Value: {props.val}</p>
        </Link>
    );
}

export default Box;

