import React from 'react';
import Box from "./Box";
import {Link} from "react-router-dom";

function TelevisionDwight() {

    const [tvData] = React.useState([
        {
            name: "Dwight",
            category: "Television",
            value: 1,
            img: "https://cdn.poppriceguide.com/guide/itmimg/thumb/18118_dwightschrute_1559249425.jpg",
            imgHeight: "150px",
            imgWidth: "150px",
            verticalPadding: "0px",
            link: '/TelevisionDwight'
        }
    ]);

    // STYLING CONSTANTS
    // Wrapper holding nav and boxes
    const teleWrapperStyle = {
        height: "1100px",
        width: "1070px",
        display: "flex",
        justifyContent: "center",
        flexFlow: "column nowrap"
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
    // nav bar
    const navStyle = {
        height: "40px",
        width: "1000px",
        display: "flex",
        justifyContent: "space-evenly"
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
    let funkoPop = tvData.map(
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
        <div style={teleWrapperStyle}>
            <nav style={navStyle}>
                <Link to={"/"} style={buttonStyle}> SHOW ALL </Link>
                <Link to={'/Television'} style={buttonStyle}> TELEVISION </Link>
            </nav>
            <div style={boxWrapperStyle}>
                {funkoPop}
            </div>
        </div>
    );
}

export default TelevisionDwight;

