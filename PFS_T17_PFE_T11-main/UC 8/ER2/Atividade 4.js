let ListaDeParticipantes = ["João", "Maria", "José"]
let Idade = 30

if (Idade >= 18){
    console.log ("Participante tem idade para participar")
    if (ListaDeParticipantes.length < 100){
        ListaDeParticipantes.push("Mario")
        console.log ("Cadastro realizado.")
    }   else {
        console.log ("Cadastro não realizado limite de participantes atingido")
    }
}  
else{
    console.log ("Você não tem idade suficiente para participar do evento")
}
    console.log(ListaDeParticipantes)