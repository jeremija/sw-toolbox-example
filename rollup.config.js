import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'

export default {
  // format: 'iife',
  // output: {
  //   format: 'iife'
  // },
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      main: true,
      browser: false,
      extensions: ['.js', '.json'],
      preferBuiltins: true,
      modulesOnly: false
    }),
    commonjs(),
    builtins()
  ]
}
