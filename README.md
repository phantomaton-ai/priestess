# Priestess 👸

Priestess is a collection of useful symbols and utilities for running applications on the [`hierophant`](https://github.com/phantomaton-ai/hierophant#readme) dependency injector.

## Usage 🛠️

The primary symbol provided by Priestess is the `start` sigil, which represents the entry point of an application. This can be used in conjunction with the `hierophant` library to bootstrap your application and manage its dependencies.

Here's an example of how to use the `start` sigil:

```javascript
import hierophant from 'hierophant';
import priestess from 'priestess';

const container = hierophant();

// Register resolver
container.install(priestess.start.resolver());
// Register a provider for the "start" symbol
container.install(priestess.start.provider([], () => () => {
  console.log('Application started!');
}));

// Resolve the "start" symbol and execute the provided function
const [start] = container.resolve(priestess.start.resolve);
start();
```

## Priestess and Sigilium 🔮

Priestess uses the [`sigilium`](https://github.com/phantomaton-ai/sigilium#readme) library to define its symbols and composition patterns.

## Contributing 🦄

We welcome contributions to the Priestess project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Priestess GitHub repository](https://github.com/phantomaton-ai/priestess).

## License 🔒

Priestess is licensed under the [MIT License](LICENSE).