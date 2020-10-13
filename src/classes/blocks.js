import { row, col, css } from "../utils/utils";

class Block {
  constructor( value, options) {
      this.value = value;
    this.options = options;
  }

  toHTML(){
        throw new Error('Method shold be realized')
  }
}
export class TitleBlock extends Block {
  constructor(value, options) {
    super( value, options);
  }

  toHTML(){
      const  {tag, styles} = this.options;       
      return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }


}
export class TextBlock extends Block {
  constructor(value, options) {
    super( value, options);
  }

  toHTML(){
      const  { styles} = this.options;  
      return row(col(`<p>${this.value}</p>`), css(styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super( value, options);
  }
  toHTML(){
      const  {styles} = this.options;  
      const html = this.value.map(col).join("");
      return row(html,  css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super( value, options);
  }

  toHTML(){
      const  {imageStyle, styles} = this.options;  
      return row(`<img src="${this.value}" style="${css(imageStyle)}" alt=${this.type}>`, css(styles));
  }
}
