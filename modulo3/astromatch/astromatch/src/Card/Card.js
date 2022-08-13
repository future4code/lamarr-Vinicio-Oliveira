import { StyledCard } from "./Style";
import styled from "styled-components";

const Div1 = styled.div`
    position: absolute;
    top: 550px;
    left: 655px;
    padding: 10px;

    button {
        padding: 15px;
        background-color: red;
    }
  
`
const Div2 = styled.div`
  position: absolute;
  top: 550px;
  left: 810px;
  padding: 10px;

    button {
        padding: 15px;
        background-color: green;
    }
 
`




export function Card() {
    return (
        <>
            <StyledCard>
                <header>astromatch</header>
                <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" />
                <div>
                    <h2>nome</h2>
                    <p>uma frase de efeito</p>
                </div>

            </StyledCard>
            <Div1>
                <button> não gostei</button>
            </Div1>
            <Div2>
                <button>gostei</button>
            </Div2>
        </>
    )
}