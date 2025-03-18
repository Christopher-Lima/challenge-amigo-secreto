//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friends = [];
let friendName = document.getElementById('amigo');
let friendsList = document.getElementById('listaAmigos');
let result = document.getElementById('resultado');

function adicionarAmigo(){
    if (friendName.value == ''){
        alert('Por favor, insira um nome.');
    } else{
        friends.push(friendName.value);
    }
    friendName.value = '';
    updateFriends();
};


function updateFriends(){
    friendsList.innerHTML = '';
    for ( i = 0; i < friends.length; i++){
        let li = document.createElement('li');
        li.textContent = `${i + 1} : ${friends[i]}`;
        friendsList.appendChild(li);
    }
};

function sortearAmigo(){
    if (friends == ''){
        alert('Insira os nomes para o sorteio.')
    } else {
        let randomPick = Math.floor(Math.random() * friends.length);
        result.innerHTML = friends[randomPick];
    }
};

function clearResult(){
    result.innerHTML = '';
}

function clearAll(){
    friends = [];
    friendsList.innerHTML = '';
    result.innerHTML = '';
};