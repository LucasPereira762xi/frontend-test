function menu_click(X){
    X.classList.toggle("mudar");
    var menu = document.getElementById("div_menu_mobile");
    var body = document.getElementById("body");
    var logo = document.getElementById("madrejoy_logo_mob");
    var icone = document.getElementById("icone_madrejoy");
    var botao = document.getElementById("botao_loja");
    var botao_loja_icone = document.getElementById("botao_loja_icone");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    body.style.display = "block";
    logo.style.display = "block";
    icone.style.display = "block";
    botao.style.display = "block";
    botao_loja_icone.style.display = "block";
    botao_loja_icone.style.alignSelf = "center";
  } else {
    menu.style.display = "block";
    body.style.display = "none";
    logo.style.display = "none";
    icone.style.display = "none";
    botao.style.display = "none";
    botao_loja_icone.style.display = "none";
  }
}
