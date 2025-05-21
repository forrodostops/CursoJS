//VARIÁVEIS
const input = document.getElementById("inputTarefa");
const mensagem = document.getElementById("informe");
const ulLista = document.getElementById("lista")
let tarefas = [];

//SOLICITA O NOME DO USUÁRIO
var nomeUsuario = window.prompt("Qual seu nome?").trim()

document.getElementById("nomeUsuario").textContent = "Usuário: " + nomeUsuario 

input.focus()

function addTarefa(){
    if(input.value.trim() == ""){
        mensagem.textContent = "O campo não pode estar vazio, digite uma tarefa!"
        setTimeout(function(){
            mensagem.textContent = ""
            input.value = ""
        }, 3000);
        return
    }
    tarefas.push(input.value)
    renderiza()    
    input.value = ""
    mensagem.textContent = "Adicionado com sucesso!"
    setTimeout(function(){
    mensagem.textContent = ""
    },900);
    input.focus()
}

function renderiza(){
    ulLista.innerHTML = "" //limpa tudo dentro da ul
    for(let i = 0; i < tarefas.length; i++){
    let li = document.createElement("li")
    li.textContent = tarefas[i]
    
    //CRIA BOTÃO REMOVER
    const botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover"
    botaoRemover.className = "botaoRemover"
    botaoRemover.onclick = () => removerTarefa(i)
    li.appendChild(botaoRemover)
    
    //CRIA BOTÃO EDITAR
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar"
    botaoEditar.className = "botaoEditar"
    botaoEditar.onclick = () => editarTarefa(i)
    li.appendChild(botaoEditar)

    ulLista.appendChild(li)
    }
}
function removerTarefa(i){
    const confirmar = confirm("Tem certeza que quer remover a tarefa?");
    if(confirmar){
        tarefas.splice(i,1);
        renderiza()
    }
}
function editarTarefa(i){
    let textoEditado = prompt("Edite sua Tarefa.");
    if (textoEditado.trim() === ""){
        window.alert("O campo não pode estar vazio.")
        return
    }
    tarefas[i] = textoEditado
    renderiza()
}