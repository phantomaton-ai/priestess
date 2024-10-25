import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import sigilia from './priestess.js';

describe('Priestess', () => {
  let container;

  beforeEach(() => {
    container = hierophant();
  });

  it('should register a provider for the start symbol', () => {
    const startProvider = stub().returns('Hello, world!');
    container.install(sigilia.start.provider([], startProvider));

    const [startFn] = container.resolve(sigilia.start.resolve);
    const result = startFn();

    expect(startProvider.called).to.be.true;
    expect(result).to.equal('Hello, world!');
  });
});