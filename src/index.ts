import angular from './configs/angular';
import chakraUi from './configs/chakra-ui';
import core from './configs/core';
import nextJs from './configs/next-js';
import react from './configs/react';
import typescript from './configs/typescript';
import rules from './rules';

export default {
	rules,

	configs: {
		core,
		typescript,

		angular,

		react,
		'chakra-ui': chakraUi,
		'next-js': nextJs,
	},
};
