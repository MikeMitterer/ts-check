import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace'

// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs'

// Convert CommonJS modules to ES6
import pkg from './package.json' assert { type: "json" };

const name = "check"

const incrementalDependencyLoader = {
    // this is the entry file, this should expose our API
    input: 'src/main/index.ts',
    // this is where the bundled javascript file will be put
    output: [{
        name,
        dir: `./lib`,
        format: 'esm', // the preferred format
        preserveModules: true,
        sourcemap: true,
    }],
    // Unterdrückt die Meldung:
    //      (!) Unresolved dependencies
    external: [
        // ...Object.keys(pkg.dependencies || {}),
        // "yargs",
    ],
    plugins: [
        replace({
            preventAssignment: true,
            __buildVersion__: pkg.version
        }),
        typescript({
            // typescript: require('typescript'),
            tsconfig: "tsconfig.lib.json",
            rootDir: './src/main',
            module: 'esnext',
        }),
    ]
};

// with using an array, we can create multiple bundled javascript files
export default [
    incrementalDependencyLoader
];
