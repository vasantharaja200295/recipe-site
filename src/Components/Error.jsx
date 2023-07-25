import React from 'react'
import { styled } from 'styled-components'


function Error() {
  return (
    <ErrorTag>
        404<br></br>
        Recipe Not Found
    </ErrorTag>
  )
}


const ErrorTag = styled.div`
    height:40%;
    width:40%;
    display:flex;
    flex-direction:cloumn;
    font-size:48px;
    font-weight:bold;
    align-items:center;
    justify-content:center;
    text-align:center;
`

export default Error