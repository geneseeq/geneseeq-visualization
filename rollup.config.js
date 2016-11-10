import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';

export default{
    entry: 'src/main.js',
    plugins: [
	replace({
	    'process.env.NODE_ENV': JSON.stringify( 'production' )
	}),
	nodeResolve({
	    jsnext: true,
	    main: true
	}),

	json(),
	babel({ exclude: 'node_modules/**'
	      }),
	//eslint({
	//}),
    ],
    dest: 'bundle.js',
    format: 'iife',
    sourceMap: 'inline',
}
