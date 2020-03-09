import React from 'react';
import Box from "./Box";
import {Link} from "react-router-dom";

function AnimationVegito() {

    const [animeData] = React.useState([
        {
            name:"Vegito",
            category:"Animation",
            value:5,
            img: "https://cdn.poppriceguide.com/guide/itmimg/thumb/16554_ssgssvegitometallic_1545253889.jpeg",
            imgHeight: "150px",
            imgWidth: "150px",
            verticalPadding: "0px",
            link: '/AnimationVegito'
        }
    ]);

    // STYLING CONSTANTS
    // Wrapper holding nav and wrapper for boxes
    const animeWrapperStyle = {
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
    let funkoPop = animeData.map(
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
        <div style={animeWrapperStyle}>
            <nav style={navStyle}>
                <Link to={"/"} style={buttonStyle}> SHOW ALL </Link>
                <Link to={'/Animation'} style={buttonStyle}> ANIMATION </Link>
            </nav>
            <div style={boxWrapperStyle}>
                {funkoPop}
            </div>
        </div>
    );
}

export default AnimationVegito;

