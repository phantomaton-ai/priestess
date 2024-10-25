# Priestess 👸

Priestess is a collection of useful symbols and utilities for running applications on the `hierophant` dependency injector.

## Usage

The primary symbol provided by Priestess is the `start` sigil, which represents the entry point of an application. This can be used in conjunction with the `hierophant` library to bootstrap your application and manage its dependencies.

Here's an example of how to use the `start` sigil:

```javascript
import hierophant from 'hierophant';
import priestess from 'priestess';

const container = hierophant();

// Register a provider for the "start" symbol
container.install(priestess.start.provider([], () => () => {
  console.log('Application started!');
}));

// Resolve the "start" symbol and execute the provided function
const [start] = container.resolve(priestess.start.resolve);
start();
```

In this example, we create a new `hierophant` container and register a provider for the `start` symbol. The provider returns a function that logs a message when executed. We then resolve the `start` symbol and call the provided function to start the application.

## Priestess and Sigilium

Priestess uses the `sigilium` library to define its symbols and composition patterns. If you're familiar with `sigilium`, you can extend the functionality of Priestess by creating new symbols and integrating them with your application.

For more information on `sigilium`, please refer to the [Sigilium README](https://github.com/phantomaton-ai/sigilium/blob/main/README.md).

## Contributing

We welcome contributions to the Priestess project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Priestess GitHub repository](https://github.com/phantomaton-ai/priestess).

## License

Priestess is licensed under the [MIT License](LICENSE).