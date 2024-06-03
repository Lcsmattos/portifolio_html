const btn = document.querySelector("#btn-enviar")

btn.addEventListener("click", async function (event) {
  event.preventDefault()

  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value
  const celular = document.querySelector('#celular').value
  const mensagem = document.querySelector('#mensagem').value

  const data = {
    name: nome,
    email: email,
    celular: celular,
    mensagem: mensagem,
  }

  const text = String('nome: ' + nome + '%20' + 'email: ' + email + '%20' + 'celular: ' + celular + '%20' + 'mensagem: ' + mensagem)
  const url = String(`https://wa.me//5512997343377?text=` + text);

  const response = await fetch("https://wa.me//5512997343377?text=Tenho%20interesse%20em%20comprar%20seu%20carro", {
    method: "POST"
  })

  console.log('data', data)
  console.log('response', response)
})

