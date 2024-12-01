const Contact = () => {
  return (
    <div id="contact">
      <h1>RESERVE SUA MESA</h1>
      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Escreve sua mensagem..."></textarea>
        <button>ENVIAR</button>
      </form>
    </div>
  )
}

export { Contact }
