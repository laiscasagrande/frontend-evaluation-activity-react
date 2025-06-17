import './index.css';

export function Servicos() {
    const servicos = [
        {
            titulo: 'Consultoria Financeira',
            descricao: 'Ajudamos você a organizar suas finanças, controlar gastos e planejar investimentos.',
            imagem: 'https://ibgem.com.br/wp-content/uploads/2021/06/bpo_financeiro.jpg'
        },
        {
            titulo: 'Desenvolvimento de Sites',
            descricao: 'Criamos sites modernos, responsivos e otimizados para buscas no Google.',
            imagem: 'https://marthus.com.br/wp-content/uploads/2021/11/criacao-de-sites-agencia-digital-marthus-1024x576.jpg'
        },
        {
            titulo: 'Marketing Digital',
            descricao: 'Gerenciamos campanhas online para aumentar o alcance da sua marca.',
            imagem: 'https://blog.a2insights.com.br/wp-content/uploads/2024/11/capa-marketing-digital.jpg'
        }
    ];

    return (
        <main id="chat-screen">
            <header>
                <h1>Nossos Serviços</h1>
            </header>
            <section className="messages-list">
                {servicos.map((servico, index) => (
                    <article className="message-attendant" key={index}>
                        <section className="message-item">
                            <p className="msg-user"><strong>Serviço:</strong></p>
                            <article className="msg-chat">
                                <div className="message-format title-and-message">
                                    <strong>{servico.titulo}</strong>
                                    <p>{servico.descricao}</p>
                                    <img src={servico.imagem} alt={`Imagem do serviço ${servico.titulo}`} />
                                </div>
                                <div className="schedule-and-check">
                                    <div className="time">Disponível</div>
                                </div>
                            </article>
                        </section>
                    </article>
                ))}
            </section>
        </main>
    );
}
