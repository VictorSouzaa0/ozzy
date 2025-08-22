import { ContentLeft, ContentRight } from "./Content";
import ozzyImage from "../assets/images/childOzzy.png"; 
import ozzyAdult from "../assets/images/goatOzzy.jpg";

export default function Main(){
    return(
        <main>
            <h1>Ozzy Osbourne</h1>

            {/* Usando o componente com a imagem na ESQUERDA */}
            <ContentLeft
                imageUrl={ozzyImage}
                imageAlt="Ozzy Osbourne em sua juventude"
            >
                <h2>Biografia</h2>
                <p>
                    John Michael 'Ozzy' Osbourne (nascido em 3 de dezembro de 1948) é um cantor, compositor e personalidade da televisão inglesa. Ele alcançou a fama durante os anos 1970 como vocalista principal da banda de heavy metal Black Sabbath.
                </p>
            </ContentLeft>
            
            {/* Usando o componente com a imagem na DIREITA */}
            <ContentRight
                imageUrl={ozzyAdult}
                imageAlt="Ozzy Osbourne no palco"
            >
                <h2>Carreira Solo</h2>
                <p>
                    Após deixar o Black Sabbath, Osbourne embarcou em uma carreira solo de grande sucesso, lançando 13 álbuns de estúdio e se tornando um ícone da cultura pop.
                </p>
            </ContentRight>
        </main>
    )
}