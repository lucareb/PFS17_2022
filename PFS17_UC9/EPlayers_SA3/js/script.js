function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value
    alert(email)
}
function mostrarMenu($event){
    //identificar o elemento do menu
    let menu = document.getElementById("menu")
    
    if(getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }
    //mudar visualização do menu
    
    event.preventDefault();
}