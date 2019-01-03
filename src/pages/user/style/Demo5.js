import styled from "styled-components"

export const Box = styled.div`
    background-color: pink;
    &.box-4{
      background: #00A0E9;
      background-size: contain;
      .input{
        &::placeholder{
          background: aliceblue;
      }
      }
    }
    .list{
      background: #fff;
    }
    
`