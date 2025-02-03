import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
    return (
        <>
      <div className="header-container">
        <h2 className="header-text">Teste Rápido HIV</h2>
      </div>
      <br />
      <div className="content">
        <h3>
          A Organização Mundial de Saúde (OMS) Relata que o autoteste é uma ação no qual o cliente coleta sua própria amostra (fluido oral ou sangue) e então realiza o procedimento do teste e depois interpreta o resultado, podendo ser sozinho, com alguém que confie ou um profissional. Este teste faz com que o paciente tenha uma independência maior e com isso descentralizar os serviços de saúde e aumenta a demanda de testes de HIV podendo alcançar mais pessoas e testar com mais frequência principalmente a população de risco e vulneráveis que podem contrai o HIV.  Exemplo deles são os homens que fazem sexo com homens (HSH), a população trans, os(as) trabalhadores(as) do sexo, a população privada de liberdade e as pessoas usuárias de álcool e outras drogas. (OMS,2023). 
        </h3>
      </div>
      <br />
      <br />
      <h2>O que é um autoteste?</h2>
      <div className="content">
        <h3>
        O autoteste é realizado de forma bem simples igual aos testes rápidos convencionais utilizados em serviços de saúde ou em ações de promoção da saúde, a diferença é que é a própria pessoa que faz, em casa ou em qualquer lugar. O exame pode utilizar fluido oral ou sangue, a depender do tipo de teste escolhido. Basta seguir o passo a passo. Ele é intuitivo e muito fácil de interpretar. (OMS,2023).
        </h3>
      </div>
      <h2>O autoteste confirma se uma pessoa tem HIV?</h2>
      <div className="content">
        <h3>
        De acordo com a Portaria nº 29, de 17 de Dezembro de 2013, o que aprova o Manual Técnico para o diagnóstico da infecção pelo HIV.  Os resultados do autoteste não podem ser utilizados para o diagnóstico concreto. Se o resultado do autoteste for reagente (positivo), procure um serviço de saúde para concluir o diagnostico com exames complementares, com profissionais qualificados. (OMS,2023)
        </h3>
      </div>      
      <div className="btn-link-conteiner">
        <a className="link" href="https://www.gov.br/aids/pt-br/assuntos/hiv-aids/autoteste-de-hiv">
          Para mais informações clique aqui
        </a>
        <button className="redirect-btn"
          onClick={() => navigate('/chat')}>
          Ir para chatbot
        </button>
      </div>
      
    </>
    )
}

export default Home;
