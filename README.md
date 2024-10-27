# Priestess 👸

Priestess is a collection of useful symbols and utilities for running applications on the [`hierophant`](https://github.com/phantomaton-ai/hierophant#readme) dependency injector.

## Usage 🛠️

The primary symbols provided by Priestess are:

- `start`: Represents the entry point of an application.
- `input`: Provides a way to get user input for your application.

Here's an example of how to use the `start` and `input` sigils:

```javascript
import hierophant from 'hierophant';
import priestess from 'priestess';

const container = hierophant();

// Register providers for the "start" and "input" symbols
container.install(priestess.start.provider([], () => () => {
  const [inputFn] = container.resolve(priestess.input.resolve);
  const input = inputFn();
  console.log(`You entered: ${input}`);
}));

container.install(priestess.input.provider([], () => () => 'Hello, user!'));

// Resolve the "start" symbol and execute the provided function
const [start] = container.resolve(priestess.start.resolve);
start();
```

In this example, we register providers for both the `start` and `input` symbols. The `start` provider resolves the `input` symbol and logs the user's input. The `input` provider returns a static string, but in a real application, it could prompt the user for input.

## Priestess and Sigilium 🔮

Priestess uses the [`sigilium`](https://github.com/phantomaton-ai/sigilium#readme) library to define its symbols and composition patterns.

## Contributing 🦄

We welcome contributions to the Priestess project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Priestess GitHub repository](https://github.com/phantomaton-ai/priestess).

## License 🔒

Priestess is licensed under the [MIT License](LICENSE).