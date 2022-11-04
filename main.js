function sayHello() {
    //alert('Hello, bro!')
    //document.getElementByld('lielais').innerHTML='Hacked!!!';
    const cont=document.getElementById('container');
    for (let i=0; i<10; i++){
        /*
        kx=document.createElement('div');
        kx.setAttribute('class','kaste');
        kx.innerHtml=i;
        */
        const xmlns='http://www.w3.org/2000/svg'
        cx=document.createElementNS(xmlns,'circle');
        cx.setAttribute('cx',Math.random() * 600);
        cx.setAttribute('cy',Math.random() * 300);
        cx.setAttribute('r',Math.random() * 50);
        cx.setAttribute('class','bumba');
        
        cont.appendChild(cx);
    }

}
function sayGoaway() {
    alert('Go away, bro!')
}
