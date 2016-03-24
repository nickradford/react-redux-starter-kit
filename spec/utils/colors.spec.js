import expect from 'expect';
import colors from 'utils/colors';


describe('Colors', () => {
  it('is defined as an object', () => {
    expect(colors)
      .toExist()
      .toBeAn('object');
  });

  it('has the `hoversOver` function', () => {
    expect(colors.hoversOver)
      .toExist()
      .toBeA('function');
  });
});
