import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import priestess from './priestess.js';

describe('Priestess', () => {
  let container;

  beforeEach(() => {
    container = hierophant();
  });

  it('provides a useful start symbol', () => {
    const provider = stub().returns('Hello, world!');

    container.install(priestess.start.resolver());
    container.install(priestess.start.provider([], () => provider));

    const [fn] = container.resolve(priestess.start.resolve);
    const result = fn();

    expect(provider.called).to.be.true;
    expect(result).to.equal('Hello, world!');
  });

  it('provides an input symbol', () => {
    const provider = stub().returns('Input data');

    container.install(priestess.input.resolver());
    container.install(priestess.input.provider([], () => provider));

    const [input] = container.resolve(priestess.input.resolve);
    const result = input();

    expect(provider.called).to.be.true;
    expect(result).to.equal('Input data');
  });
});