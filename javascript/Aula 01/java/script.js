//DECLARAÇÃO DE VARIÁVEIS GLOBAIS
const inputTarefa = document.getElementById("inputTarefa");
const informe = document.getElementById("mensagem");
const ulLista = document.getElementById("lista");
const cxInterrogativa = document.getElementById("fundo");
const pergunta = document.getElementById("textoInterrogativo");
const inputTarefaEditada = document.getElementById("inputTarefaEditada");
let tarefas = [];

inputTarefa.focus()

function criarTarefa(){
    if(inputTarefa.value.trim() ===""){
        informe.textContent = "Nenhuma tarefa foi digitada.";
        setTimeout(function(){
            informe.textContent = ""
        },2000);
        inputTarefa.value = ""
        inputTarefa.focus()
        return
    }
    tarefas.push(inputTarefa.value)
    renderiza()
    inputTarefa.value = ""
    inputTarefa.focus()
    informe.textContent = "Adicionado com sucesso!"
    setTimeout(function(){
        informe.textContent = ""
    },2000);

}
function renderiza(){
    ulLista.innerHTML = "";
    for(let indice = 0; indice < tarefas.length; indice++){
        const li = document.createElement("li");
        ulLista.appendChild(li);
        const p = document.createElement("p");
        p.textContent = tarefas[indice];
        li.appendChild(p);
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.className = "botaoRemover";
        botaoRemover.onclick = () => remover(indice)
        li.appendChild(botaoRemover);
        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.className = "botaoEditar";
        botaoEditar.onclick = () => editar(indice);
        li.appendChild(botaoEditar);
    }
}
function remover(indice){
    pergunta.textContent = "Tem certeza que deseja remover a tarefa?"
    pergunta.style.marginTop = "32px"
    document.querySelector("#sim").textContent = "Sim"
    document.querySelector("#nao").textContent = "Não"
    cxInterrogativa.style.visibility = "visible"
    document.getElementById("sim").onclick = () => simExcluir(indice)
    inputTarefaEditada.style.display = "none"
    desabilitarBotao()
}
function simExcluir(indice){
    tarefas.splice(indice, 1);
    renderiza()
    informe.textContent = "Tarefa removida com sucesso!"
    setTimeout(function(){
        informe.textContent = ""
    },2000)
    cxInterrogativa.style.visibility = "hidden"
    inputTarefa.focus()
    habilitarBotao()
}
function naoFazer(){
    cxInterrogativa.style.visibility = "hidden"
    inputTarefaEditada.value = ""
    inputTarefa.focus()
    habilitarBotao()
}
function editar(indice){
    pergunta.textContent = "Digite para Alterar!"
    inputTarefaEditada.style.display = "block"
    document.querySelector("#sim").textContent = "OK"
    document.querySelector("#nao").textContent = "Cancelar"
    cxInterrogativa.style.visibility = "visible"
    inputTarefaEditada.focus()
    desabilitarBotao()
    document.getElementById("sim").onclick = () => simEditar(indice);
}
function simEditar(indice){
    let tarefaEditada = inputTarefaEditada.value;
    if (tarefaEditada.trim() == ""){
        window.alert("O campo não pode ser vazio.");
        inputTarefaEditada.value = ""
        inputTarefaEditada.focus()
        return;
    }
    tarefas[indice] = tarefaEditada
    renderiza()
    informe.textContent = "Alterado com sucesso!"
    setTimeout(function(){
        informe.textContent = ""
    },2000)
    inputTarefaEditada.value = ""
    cxInterrogativa.style.visibility = "hidden"
    habilitarBotao()
}
function habilitarBotao(){
    inputTarefa.disabled = false;
    document.getElementById("botaoAdd").disabled = false;
    document.querySelectorAll(".botaoRemover").forEach(function(bt){
        bt.disabled = false;
    });
    document.querySelectorAll(".botaoEditar").forEach(function(bt){
        bt.disabled = false;
    });
}
function desabilitarBotao(){
    inputTarefa.disabled = true;
    document.getElementById("botaoAdd").disabled = true;
    document.querySelectorAll(".botaoRemover").forEach(function(botao){
        botao.disabled = true;
    });
    document.querySelectorAll(".botaoEditar").forEach(function(botao){
        botao.disabled = true;
    });
}