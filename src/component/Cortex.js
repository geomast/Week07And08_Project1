import React from 'react';
import Box from "./Box";
import {Link} from "react-router-dom";

function GamesCortex() {

    const [gameData] = React.useState([
        {
            name:"Cortex",
            category:"Games",
            value:2,
            img: "https://cdn.poppriceguide.com/guide/itmimg/thumb/11825_drneocortex_1505810756.jpg",
            imgHeight: "150px",
            imgWidth: "150px",
            verticalPadding: "0px",
            link: '/GamesCortex'
        }
    ]);

    // STYLING CONSTANTS
    // Wrapper holding nav and wrapper for boxes
    const gameWrapperStyle = {
        height: "1100px",
        width: "1070px",
        display: "flex",
        justifyContent: "center",
        flexFlow: "column nowrap"
    };
    // nav bar which houses Links
    const navStyle = {
        height: "40px",
        width: "1000px",
        display: "flex",
        justifyContent: "space-evenly"
    };
    // Wrapper holding just boxes
    const boxWrapperStyle = {
        height: "1050px",
        width: "1070px",
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
        cursor: "pointer"
    };
    // divs acting as buttons in nav bar, this being their styling
    const buttonStyle = {
        height: "42px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Courier",
        fontSize: "32px",
        backgroundColor: "indigo",
        color: "white",
        borderRadius: "13px",
        cursor: "pointer",
        textDecoration: "none"
    };
    // map of data array, exported from Data.js
    let funkoPop = gameData.map(
        (entry, index) => (
            <Box key={index}
                 name={entry.name}
                 cat={entry.category}
                 val={entry.value}
                 image={entry.img}
                 iH={entry.imgHeight}
                 iW={entry.imgWidth}
                 vP={entry.verticalPadding}
                 fPL={entry.link}
            />
        )
    );

    // the Wrapper being returned
    return (
        <div style={gameWrapperStyle}>
            <nav style={navStyle}>
                <Link to={"/"} style={buttonStyle}> SHOW ALL </Link>
                <Link to={'/Games'} style={buttonStyle}> GAMES </Link>
            </nav>
            <div style={boxWrapperStyle}>
                {funkoPop}
            </div>
        </div>
    );
}

export default GamesCortex;

