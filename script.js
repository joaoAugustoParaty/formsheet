//LIMITAR O Numero de Caracteres

let cpf = document.getElementById('cpf');

cpf.addEventListener('keyup', () => {
    if (cpf.value.length > 11) {
        cpf.value = cpf.value.slice(0, 11);
    }
})

let cel = document.getElementById('cel');

cel.addEventListener('keyup', () => {
    if (cel.value.length > 11) {
        cel.value = cel.value.slice(0, 11);
    }
})

//Sucesso ou erro ao enviar a mensagem!
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact Message Sent Sucessfully.</div>"))
    .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message sent not sent.</div>"))
})