// import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import builtins from 'rollup-plugin-node-builtins';
// import globals from 'rollup-plugin-node-globals';
// import babel from "rollup-plugin-babel";

export default {
  input: 'server.js',
  output: {
    file: 'bundle.server.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
