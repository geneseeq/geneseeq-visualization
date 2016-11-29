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
	nodeResolve({
	    jsnext: true,
	    main: true,
	    browser: true
	}),

	commonjs({
	    // non-CommonJS modules will be ignored, but you can also
	    // specifically include/exclude files
	    include: 'node_modules/**',  // Default: undefined
	    exclude: [ 'node_modules/lodash-es/**', 'node_modules/symbol-observable/**' ],  // Default: undefined

	    // search for files other than .js files (must already
	    // be transpiled by a previous plugin!)
	    extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

	    // if true then uses of `global` won't be dealt with by this plugin
	    ignoreGlobal: true,  // Default: false

	    // if false then skip sourceMap generation for CommonJS modules
	    //sourceMap: false,  // Default: true
	    // explicitly specify unresolvable named exports
	    // (see below for more details)
	    namedExports: { 'node_modules/react/react.js': ['default' ] }  // Default: undefined
	}),
	
	babel(
	    // .babelrc
	    {
		//exclude: 'node_modules/**',
		"presets": [
		    [
			"es2015",
			{
			    "modules": false
			}
		    ]
		],
		"plugins": [
		    "external-helpers"
		]
	    }),

	replace({
	    'process.env.NODE_ENV': JSON.stringify( 'development' )
	}),

	json()
    ],
    dest: 'bundle.js',
    //format: 'umd',
    //treeshake: false
}
