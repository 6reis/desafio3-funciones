ele = documento.getElementById('ele1');
function Pintar (color){
    ele.style.backgroundcolor= color;
}
Pintar ('yellow');

ele.addEventListener('click', function(){
            Pintar(orange);
});