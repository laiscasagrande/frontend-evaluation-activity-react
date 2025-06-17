import { useState } from 'react';
import './index.css';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TelaNome() {
    const [nome, setNome] = useState('');
    const [nomeConfirmado, setNomeConfirmado] = useState('');

    function handleSubmitNome(e) {
        e.preventDefault();
        if (nome.trim() !== '') {
            setNomeConfirmado(nome);
        }
    }

    return (
        <main id="chat-screen">
            <header>
                <h1>Bem-vindo!</h1>
            </header>

            <section className="messages-list">
                <article className="message-attendant">
                    <section className="message-item">
                        <p className="msg-user"><strong>Sistema diz:</strong></p>
                        <article className="msg-chat">
                            <div className="message-format">
                                Por favor, informe seu nome para começar o atendimento.
                            </div>
                            <div className="schedule-and-check">
                                <div className="time">15:42</div>
                            </div>
                        </article>
                    </section>
                </article>

                {nomeConfirmado && (
                    <article className="message-you">
                        <section className="message-item">
                            <p className="msg-user"><strong>Você diz:</strong></p>
                            <article className="msg-chat">
                                <div className="message-format">
                                    Olá, meu nome é {nomeConfirmado}.
                                </div>
                                <div className="schedule-and-check">
                                    <div className="time">15:43</div>
                                </div>
                            </article>
                        </section>
                    </article>
                )}
            </section>

            {!nomeConfirmado && (
                <footer className="submit-form">
                    <form id="form-chat-send" onSubmit={handleSubmitNome}>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <button type="submit" id="button-submit">
                            <div id="icon-send-horizontal"><Send size={20} /></div>
                        </button>
                    </form>
                </footer>
            )}
            {nomeConfirmado && (
                <footer className="submit-form">
                    <form id="form-chat-send" onSubmit={handleSubmitNome}>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <Link to="/inicial">
                            <div id="icon-send-horizontal">
                                Ir para o chat
                            </div>
                        </Link>
                    </form>
                </footer>
            )}
        </main>
    );
}
