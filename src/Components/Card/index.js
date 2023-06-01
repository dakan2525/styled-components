import React from "react";
import styled from "styled-components";
import imageFilter from "../../imageFilter";

const Card = styled.div`
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
border-radius: 10px;
margin: 2px 0;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
font-size: 12px;
`;

const Info = styled.div`
display:flex;
flex-direction: column;
color: ${({theme}) => theme.text};
.type{
    font-weight: bold;
}
`


export default ({cargo}) => {
    
const { type,from, value, date} = cargo;

    return <Card>
        {imageFilter(type)}
        <Info>
            <samp className="type">{type}</samp>
            <samp>{from}</samp>
            <samp>{value}</samp>
        </Info>
        <samp>{date}</samp>
        
    </Card>
}