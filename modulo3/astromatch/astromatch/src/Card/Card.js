import { StyledCard } from "./Style";
import styled from "styled-components";

const Div1 = styled.div`
    position: absolute;
    top: 550px;
    left: 655px;
    
    img {
        width: 98px;
    }
`
const Div2 = styled.div`
  position: absolute;
  top: 558px;
  left: 770px;

  img {
    width: 100px;
  }

`

const Principal = styled.div`
    //border: 1px solid;
    
`


export function Card() {
    return (
        <Principal>
            <StyledCard>
                <header>astromatch</header>
                <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" />
                <div>
                    <h2>nome</h2>
                    <p>uma frase de efeito</p>
                </div>

            </StyledCard>
            <Div1>
                <img src="https://content.api.news/v3/images/bin/cbbf175216077fbe850d1430282373de?width=650" alt="icone X" />
            </Div1>
            <Div2>
                <img src="https://www.kindpng.com/picc/m/132-1323936_tinder-heart-and-x-hd-png-download.png" alt="icone s2" />
            </Div2>
        </Principal>
    )
}