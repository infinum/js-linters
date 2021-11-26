import type { NextPage } from 'next';

// BAD
enum barenumname {
  example = 'example',
}

// GOOD
enum GoodEnum {
  Example = 'example',
}

// BAD
interface BadInterface {
  example: boolean;
}

// GOOD
interface IGoodInterface {
  example: boolean;
}

const Home: NextPage = () => {
  const badEnum = barenumname.example;
  const goodEnum = GoodEnum.Example;

  const badInterface: BadInterface = { example: false };
  const goodInterface: IGoodInterface = { example: true };

  // BAD
  const valid = true;
  const areAvailable = false;

  // GOOD
  const isValid = false;
  const hasSomething = true;
  const shouldUpdate = true;

  console.log(badEnum, goodEnum, badInterface, goodInterface, valid, isValid, hasSomething, shouldUpdate, areAvailable);

	return (
		<div>ESLint Validate</div>
	);
};

export default Home;
