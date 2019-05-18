class Options {
  constructor(bg, textAlign, height, width, fontSize) {
    this.bg = bg;
    this.textAlign = textAlign; 
    this.height = height;
    this.width = width;
    this.fontSize = fontSize; 
  }
  div() {
    let newElem = document.createElement('div');
    newElem.textContent = prompt('Введите текст', '');
    newElem.style.cssText = `background: ${this.bg}; textAlign: ${this.textAlign}; height: ${this.height}px; width: ${this.width}px; fontSize: ${this.fontSize}px`;
    newElem.style.fontSize = `${this.fontSize}px`;
    newElem.style.textAlign = `${this.textAlign}`;
    let body = document.getElementsByTagName('body')[0];
    body.insertBefore(newElem, body.children[0]);
    console.log(newElem);
  }
  
}

const creature = new Options('red', 'right', 200, 300, 46);
creature.div();
console.log(creature);

