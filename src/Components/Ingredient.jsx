import React from 'react'
import { styled } from 'styled-components'


function Ingredient(props) {
    console.log(props.ingre)
    function captialize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  

    if (props.ingre == null){
    }else{
        return (
            <Card>
                <img src={props.ingre.image} alt={props.ingre.name}/>
                <div>
                    <h3>{captialize(props.ingre.name)}</h3>
                    <p>{props.ingre.originalString}</p>
                </div>
            </Card>
          )
    }
  
}

const Card = styled.div`
    height:90px;
    width:max-content;
    background-color:#dedede;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    box-sizing:border-box;
    padding-top:1%;
    padding-bottom:1%;
    padding-left:1%;
    padding-right:2%;
    border-radius:10px;
    margin:5px;
    img{
        height:100%;
        width:30%;
        border-radius:7px;
        object-fit:cover;
        margin-right:10px;
    }
    div{
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        line-height:3px;
        align-items:flex-start;
        justify-content:center;
        white-space: nowrap;
    }
    p{
        font-size:18px;
    }

`



export default Ingredient