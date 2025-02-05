import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
    return (
        <>
      <div className="header-container">
        <h1 className="header-text">Teste Rápido HIV</h1>
      </div>
      <br />
      <div className="content">
        <h3>
        A Organização Mundial de Saúde (OMS) informa que o autoteste é uma forma da pessoa coletar sua própria amostra (fluido oral ou sangue), fazer o teste e interpretar o resultado, sozinha, com alguém de confiança ou com um profissional de saúde.

O autoteste dá mais autonomia ao paciente, descentraliza os serviços de saúde e aumenta a procura por testes de HIV, alcançando mais pessoas e possibilitando testagens mais frequentes, principalmente entre populações de risco e vulneráveis, como homens que fazem sexo com homens (HSH), população trans, profissionais do sexo, população carcerária e usuários de álcool e outras drogas.

        </h3>
      </div>
      <br />
      <br />
      <h2>O que é um autoteste?</h2>
      <div className="content">
        <h3>
        O autoteste é simples como os testes rápidos convencionais feitos em serviços de saúde ou ações de promoção da saúde. A diferença é que a própria pessoa faz o teste em casa ou onde preferir. O exame pode usar fluido oral ou sangue, dependendo do tipo de teste. É só seguir o passo a passo, que é fácil de entender e interpretar.
        </h3>
      </div>
      <h2>O autoteste confirma se uma pessoa tem HIV?</h2>
      <div className="content">
        <h3>
        De acordo com a Portaria nº 29, de 17 de dezembro de 2013, que aprova o Manual Técnico para o diagnóstico da infecção pelo HIV, os resultados do autoteste não servem para dar um diagnóstico definitivo. Se o resultado do autoteste for positivo, procure um serviço de saúde para fazer exames complementares e ter um diagnóstico conclusivo com profissionais qualificados.
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
