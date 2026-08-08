function noturno() {
   document.body.classList.toggle("escuro")
 
 
  
}

 let padrao = document.querySelector("#tema")
  
 padrao.addEventListener ("click",function troca() {
      if (padrao.value == "Modo Escuro") {
         padrao.value = "Padrão"
      }     else if (padrao.value = "Padrão") {
       padrao.value = "Modo Escuro"
      }
 }
)

