import { useState } from "react";
import { useNavigate } from "react-router-dom";
import negativeTest from "../assets/negative-test.jpg";
import positiveTest from "../assets/positive-test.jpg";

function ChatBot() {
  const navigate = useNavigate();
    const [index, setIndex] = useState(0)
    return (
        <>
        <div className="container">
        <div className="promts-conteiner">
            <button onClick={() => setIndex(0)}
              className="question-btn">
            Iniciar chat
            </button>
            <button  onClick={() => setIndex(1)}
              className="question-btn">O que é o autoteste de HIV?</button>
            <button  onClick={() => setIndex(2)}
              className="question-btn">Onde posso conseguir um autoteste de HIV?</button>
            <button  onClick={() => setIndex(3)}
              className="question-btn">Como usar o autoteste?</button>
            <button  onClick={() => setIndex(4)}
              className="question-btn">Quando devo fazer o autoteste?</button>
            <button  onClick={() => setIndex(5)}
              className="question-btn">O que é o período de janela imunológica?</button>
            <button  onClick={() => setIndex(6)}
              className="question-btn">O que faço se o resultado for negativo?</button>
            <button  onClick={() => setIndex(7)}
              className="question-btn">O que faço se o resultado for positivo?</button>
            <button  onClick={() => setIndex(8)}
              className="question-btn">E se eu tiver dúvidas sobre o resultado?</button>
            <button  onClick={() => setIndex(9)}
              className="question-btn">A realização do autoteste é confidencial?</button>
            <button  onClick={() => setIndex(10)}
              className="question-btn">Por que é importante fazer o teste de HIV?</button>
            <button  onClick={() => setIndex(11)}
              className="question-btn">Precisa de mais informações?</button>
            <button  onClick={() => setIndex(12)}
              className="question-btn">passo a passo realização do autoteste com sangue</button>
            <button  onClick={() => navigate("/")}
              className="question-btn">Encerrar chat</button>
          </div>
          <div className="respostas-conteiner">
            {
              index === 0 && (
                  <h1>Olá! Sou seu assistente virtual e estou aqui para responder suas dúvidas sobre o autoteste de HIV. Escolha uma pergunta e vamos começar 😊?</h1>
              )
            }
            {
              index === 1 && (
                
              <h1>O autoteste de HIV é um teste rápido que você pode fazer em casa para saber se tem anticorpos contra o HIV no seu corpo. Ele é seguro, prático e fácil de usar, seguindo as orientações do Ministério da Saúde.</h1>
                  
              )
            }
            {
               index === 2 && (
                  <h1>Você pode comprar o autoteste de HIV em farmácias, postos de saúde do SUS ou em campanhas de distribuição gratuita. Verifique se a embalagem tem o selo da Anvisa para garantir a segurança do produto.</h1>
              )
            }
            {
               index === 3 && (
                  <h1>Para fazer o autoteste, siga as instruções da embalagem. Geralmente, o teste envolve coletar uma pequena amostra de sangue da ponta do dedo ou saliva. Leia o manual antes de começar e siga todos os passos com atenção para ter um resultado confiável.</h1>
              )
            }
            {
              index === 4 && (
                  <h1>Faça o autoteste se você teve alguma situação de risco, como relação sexual sem preservativo ou contato com sangue de alguém. Lembre-se de esperar 30 dias após a exposição ao vírus, que é o tempo para o teste detectar os anticorpos.</h1>
              )
            }
            {
               index === 5 && (
                  <h1>O período de janela imunológica é o intervalo entre a infecção pelo HIV e o momento em que o teste consegue detectar os anticorpos no sangue. Geralmente, é de até 30 dias. Se você fizer o teste antes disso, o resultado pode não ser confiável.</h1>
              )
            }
            {
               index === 6 && (
                  <>
                    <h1>Se o resultado for negativo e você não teve nenhuma situação de risco nos últimos 30 dias, você não tem o vírus HIV. Caso contrário, repita o teste após o período de janela imunológica.</h1>
                    <img src={negativeTest} alt="auto teste hiv negativo" />
                  </>
              )
            }
            {
                index === 7 && (
                  <>
                    <h1>Se o resultado for positivo, procure imediatamente um posto de saúde para fazer um teste confirmatório e receber orientação profissional. O SUS oferece acompanhamento e tratamento gratuitos.</h1>
                    <img src={positiveTest} alt="auto teste hiv positivo" />
                  </>
              )
            }
            {
               index === 8 && (
                  <h1>Se você tiver dúvidas sobre o resultado, procure um posto de saúde para fazer outro teste e conversar com um profissional de saúde.</h1>
              )
            }
            {
               index === 9 && (
                  <h1>Sim, o autoteste de HIV é totalmente confidencial. Você faz o teste sozinho e decide se quer compartilhar o resultado com um profissional de saúde.</h1>
              )
            }
            {
               index === 10 && (
                  <h1>Saber se você tem o HIV é importante para cuidar da sua saúde e da saúde de outras pessoas. O diagnóstico precoce permite começar o tratamento logo, evitando complicações e a transmissão do vírus.</h1>
              )
            }
            {
               index === 11 && (
                  <h1>Se precisar de mais ajuda, posso indicar o posto de saúde mais próximo ou o Disque Saúde pelo número 136. Estou aqui para te ajudar!</h1>
              )
            }
            {
               index === 12 && (
                <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qiIJPnvKCbo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              )
            }
          </div>
          </div>
        </>
    )
}

export default ChatBot;
