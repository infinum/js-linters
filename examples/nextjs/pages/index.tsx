import type { NextPage } from 'next';

// BAD
enum myexample {
  example = 'example',
}

// GOOD
enum MyExample {
  Example = 'example',
}

// BAD
interface Example {
  test: boolean;
}

// GOOD
interface IExample {
  test: boolean;
}

const Home: NextPage = () => {
  // BAD
  const valid = true;
  const areAvailable = false;

  // GOOD
  const isValid = false;
  const hasSomething = true;
  const shouldUpdate = true;

  console.log(valid, isValid, hasSomething, shouldUpdate, areAvailable);

	return (
		<div>ESLint Validate</div>
	);
};

export default Home;
