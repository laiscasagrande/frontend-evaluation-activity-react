import { useState } from 'react';
import './index.css';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

export function TelaInicial() {
    const [enviarMensagem, setEnviarMensagem] = useState('');
    const [listaMensagens, setListaMensagens] = useState([]);

    function adicionarMenssagemNaLista(event) {
        if (enviarMensagem.trim() !== '') {
            setListaMensagens([...listaMensagens, enviarMensagem]);
            setEnviarMensagem('');
        }
    }

    const { handleSubmit } = useForm()

    return (
        <main id="chat-screen">
            <header>
                <h1>Atendimento on-line</h1>
            </header>
            <section className="messages-list">
                <article class="message-attendant">
                    <section class="message-item">
                        <p class="msg-user"><strong>Atendente diz:</strong></p>
                        <article class="msg-chat">
                            <div className="message-format">Olá, bom dia<br />Clique aqui para ver nossos serviços</div>
                            <div class="schedule-and-check">
                                <div class="time">15:41</div>
                                <div class="icon-check-check" data-lucide="check-check"></div>
                            </div>
                        </article>
                    </section>
                    <section class="message-item">
                        <p class="msg-user"><strong>Atendente diz:</strong></p>
                        <article class="msg-chat">
                            <div class="message-format">Em que podemos ajudar?</div>
                            <div class="schedule-and-check">
                                <div class="time">15:41</div>
                                <div class="icon-check-check" data-lucide="check-check"></div>
                            </div>
                        </article>
                    </section>
                </article>
                {listaMensagens.map((mensagem, index) => (
                    <article class="message-you">
                        <section class="message-item">
                            <p class="msg-user"><strong>Você diz:</strong></p>
                            <article class="msg-chat">
                                <div class="message-format">{mensagem}</div>
                                <div class="schedule-and-check">
                                    <div class="time">15:41</div>
                                </div>
                            </article>
                        </section>
                    </article>
                ))}
                <article className="message-you" id="my-message">
                </article>
            </section>
            <footer className="submit-form">
                <form id="form-chat-send" method="post" action="https://httpbin.org/post" onSubmit={handleSubmit(adicionarMenssagemNaLista)}>
                    <input type="text" id="message" name="message" onChange={event => setEnviarMensagem(event.target.value)} value={enviarMensagem} />
                    <button type="submit" id="button-submit">
                        <div id="icon-send-horizontal"><Send size={20} /></div>
                    </button>
                </form>
            </footer>
        </main>
    );
}