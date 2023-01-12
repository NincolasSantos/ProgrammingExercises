var p = document.getElementsByTagName('p');

console.log(p.length) //conta quantos p tem no html

console.log(p[2].innerHTML);

p[0].innerHTML = "tente outra vez"; //muda meu primeiro p do html

for(i=0;i<p.length;i++){
    p[i].innerHTML = "manipulado por js - " + i
};
