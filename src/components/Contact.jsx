const Contact = () => {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Escreve sua mensagem..."></textarea>
        <input type="submit" placeholder="BOOK" />
      </form>
    </div>
  )
}

export { Contact }
