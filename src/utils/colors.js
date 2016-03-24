import Color from 'color';

const cFunc = Color;

export default {
  brand: {
    primary: '#0085c3',
    dark: '#282828',
  },
  text: {
    lightest: '#f8f8f8',
    light: '#eee',
    gray: '#ccc',
  },

  hoversOver(color) {
    return cFunc(color).lighten(0.5).hslString();
  },
};
