import React, { ReactNode } from "react"
import styled from "styled-components"

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
function Warning({ children, ...restProps }: defaultProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

/*---> Styles <---*/
export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  border: solid red;
  width: fit-content;
  padding: 10px;

  @media (max-width: 550px) {
    font-size: 18px;
  }
`

export default Warning
