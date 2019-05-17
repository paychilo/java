class Options {
  constructor(bg = 'yellow', textAlign = 'center', height = 100, width = 200, fontSize = 28) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize; 
    this.textAlign =  textAlign; 
  }
  div() {
    let newElem = document.createElement('div');
    newElem.textContent = prompt('Введите текст', '');
    newElem.style.cssText =`background: ${this.bg}; textAlign: ${this.textAlign}; height: ${this.height}px; width: ${this.width}px; fontSize: ${this.fontSize}px`;
    let body = document.getElementsByTagName('body')[0];
    body.insertBefore(newElem, body.children[0]);
    console.log(newElem);
  }
  
}

const creature = new Options('red', 'right', 200, 300, 46);
creature.div();
console.log(creature);

