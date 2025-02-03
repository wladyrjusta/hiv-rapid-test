import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatBot() {
  const navigate = useNavigate();
    const [index, setIndex] = useState(0)
    return (
        <>
          {
            index === 0 && (
                <h1>Olá! Sou seu assistente virtual e estou aqui para responder suas dúvidas sobre o autoteste de HIV. Escolha uma pergunta e vamos começar 😊?</h1>
            )
          }
          {
             index === 1 && (
                <h1>O autoteste de HIV é um teste rápido que você pode realizar no conforto de casa para saber se há a presença de anticorpos contra o HIV no seu organismo. Ele é seguro, prático e de fácil uso, seguindo as orientações do Ministério da Saúde.</h1>
            )
          }
          {
             index === 2 && (
                <h1>O autoteste de HIV pode ser adquirido em farmácias, unidades de saúde do SUS ou através de campanhas de distribuição gratuita. Verifique se a embalagem contém o selo da Anvisa para garantir a segurança do produto.</h1>
            )
          }
          {
             index === 3 && (
                <h1>Para realizar o autoteste, siga as instruções da embalagem. Geralmente, o teste envolve a coleta de uma pequena amostra de sangue da ponta do dedo ou saliva. Leia o manual antes de começar e siga todos os passos cuidadosamente para garantir um resultado confiável.</h1>
            )
          }
          {
             index === 4 && (
                <h1>O autoteste deve ser feito se você teve uma situação de risco, como relação sexual sem preservativo ou contato com sangue de alguém. Lembre-se de considerar o período de janela imunológica, que é de 30 dias após a exposição ao vírus.</h1>
            )
          }
          {
             index === 5 && (
                <h1>O período de janela imunológica é o intervalo entre a infecção pelo HIV e o momento em que o teste consegue detectar os anticorpos no sangue. Geralmente, é de até 30 dias. Se você fizer o teste antes disso, o resultado pode não ser confiável.</h1>
            )
          }
          {
             index === 6 && (
                <h1>Se o resultado for negativo e você não teve situações de risco nos últimos 30 dias, isso significa que você não tem o vírus do HIV. Caso contrário, é importante repetir o teste após o período de janela imunológica para confirmar.</h1>
            )
          }
          {
             index === 7 && (
                <h1>Se o resultado for positivo, procure imediatamente uma unidade de saúde para fazer um teste confirmatório e receber orientação profissional. O SUS oferece acompanhamento gratuito e tratamento para garantir qualidade de vida.</h1>
            )
          }
          {
             index === 8 && (
                <h1>Se você tiver dúvidas sobre o resultado, procure uma unidade de saúde para realizar outro teste e esclarecer suas preocupações com um profissional qualificado.</h1>
            )
          }
          {
             index === 9 && (
                <h1>Sim, o autoteste de HIV é completamente confidencial. Você realiza o teste de forma privada e decide se deseja compartilhar o resultado com um profissional de saúde.</h1>
            )
          }
          {
             index === 10 && (
                <h1>Conhecer seu status sorológico é um ato de cuidado com sua saúde e a de outras pessoas. O diagnóstico precoce permite iniciar o tratamento imediatamente, prevenindo complicações e interrompendo a transmissão do HIV.</h1>
            )
          }
          {
             index === 11 && (
                <h1>Se precisar de mais ajuda ou informações, posso te indicar a unidade de saúde mais próxima ou o Disque Saúde pelo número 136. Estou aqui para te apoiar!</h1>
            )
          }
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
          <button  onClick={() => navigate("/")}
            className="question-btn">Encerrar chat</button>
        </>
    )
}

export default ChatBot;
