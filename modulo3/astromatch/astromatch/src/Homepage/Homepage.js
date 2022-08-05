import { StyledHomepage } from "./Style";
import { Card } from "../Card/Card";
import styled from "styled-components";

const Dive = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    margin-top: 480px;
    -ms-flex-item-align: center;
`

export function Homepage() {
    return (
        <StyledHomepage>
            <Card/>
            <Dive>
                <img src="https://content.api.news/v3/images/bin/cbbf175216077fbe850d1430282373de?width=650" alt="icone X"/>
                <img src="https://www.kindpng.com/picc/m/132-1323936_tinder-heart-and-x-hd-png-download.png" alt="icone s2"/>
            </Dive>
        </StyledHomepage>
    )

}