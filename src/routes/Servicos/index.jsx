import { useState } from 'react';
import './index.css';

export function Servicos() {
  const [mostrarDetalhes, setMostrarDetalhes] = useState({});

  const servicos = [
    {
      id: 1,
      titulo: 'Criação de Sites',
      descricao: 'Sites modernos, responsivos e otimizados.',
      detalhes: 'Inclui design personalizado, SEO básico, integração com redes sociais e painel administrativo.',
      imagem: 'https://marthus.com.br/wp-content/uploads/2021/11/criacao-de-sites-agencia-digital-marthus-1024x576.jpg'
    },
    {
      id: 2,
      titulo: 'Consultoria em TI',
      descricao: 'Soluções eficientes para seu negócio.',
      detalhes: 'Ajudamos com infraestrutura, segurança e otimização de processos tecnológicos.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyiZF0QB3FB5hiyK4Ot-pfAECoZKz2NlsRg&s'
    },
    {
      id: 3,
      titulo: 'Suporte Técnico',
      descricao: 'Atendimento rápido, confiável e seguro.',
      detalhes: 'Disponível 24h, para empresas e residências. Diagnóstico remoto e presencial.',
      imagem: 'https://blog.inforpro.com.br/wp-content/uploads/2021/12/Suporte-tecnico-1200x650.jpg'
    },
  ];

  const toggleDetalhes = (id) => {
    setMostrarDetalhes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main id="chat-screen">
      <header>
        <h1>Nossos Serviços</h1>
      </header>

      <section className="messages-list">
        {servicos.map(servico => (
          <article className="message-attendant" key={servico.id}>
            <section className="message-item">
              <p className="msg-user"><strong>Serviço:</strong></p>
              <article className="msg-chat">
                <div className="message-format">
                  <img src={servico.imagem} alt={servico.titulo} style={{ borderRadius: '0.5rem', marginBottom: '0.5rem' }} />
                  <strong>{servico.titulo}</strong><br />
                  {servico.descricao}
                  {mostrarDetalhes[servico.id] && (
                    <p style={{ marginTop: '0.5rem' }}>{servico.detalhes}</p>
                  )}
                  <button
                    style={{
                      marginTop: '0.5rem',
                      background: '#fff',
                      border: 'none',
                      color: '#b34db2',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      borderRadius: '0.5rem'
                    }}
                    onClick={() => toggleDetalhes(servico.id)}
                  >
                    {mostrarDetalhes[servico.id] ? 'Ver menos' : 'Ver mais'}
                  </button>
                </div>
                <div className="schedule-and-check">
                  <div className="time">15:41</div>
                </div>
              </article>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
}
