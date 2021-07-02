function nextChallenge(){
        const random = (max) => Math.floor(Math.random() * max);

        var elems = document.getElementsByClassName('conteudo');
        for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'none';
        }

        var elemsRandom = document.getElementsByClassName(`conteudo-${random(3)}`);
        for (var i=0;i<elemsRandom.length;i+=1){
            elemsRandom[i].style.display = 'block';
          }
        console.log(elemsRandom);
}
