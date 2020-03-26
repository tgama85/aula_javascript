
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert ("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://www.linkedin.com/in/tatiana-gama-430b643b/");
    window.location.href = "https://www.linkedin.com/in/tatiana-gama-430b643b/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
alert(soma(5, 10));
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours();
alert(d.getMinutes());
*/
/*
var d = new Date();
alert(d.getMonth()+1);
*/
/*
var d = new Date();
alert(d.getMonth());
*/
/*
var d = new Date();
alert(d.getDate());
*/
/*
var d = new Date();
alert(d);
*/
/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
}
*/
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
};
*/
/*
var idade = 18
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
};
*/
/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"vinho"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//console.log(fruta);
//var lista = ["maça","pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString()); 
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
//alert(lista[1]);
//alert("meu primeiro js");
//var nome = "Tatiana Gama";
//var idade = 34;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome.toLocaleUpperCase());
//console.log(idade * idade2);
//console.log(frase.replace("Japãp","Brasil"));
//alert(frase.replace("Japão","Brasil"));