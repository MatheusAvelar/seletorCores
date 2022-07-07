function geradorCores(){
    var cor = '';
    while (cor.length < 6) {
      cor += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    var newColor =  '#' + cor;
    document.body.style.backgroundColor = newColor;
    document.querySelector('#color').textContent = newColor;
  }