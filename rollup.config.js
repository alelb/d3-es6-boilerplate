import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

export default {
  entry: "scripts/index.js",
  dest: "bundle/index.js",
  format: "iife",
  moduleName: "d3",
  plugins: [
    commonjs(),
    resolve({
      jsnext: true,
      main: true
    })
  ]
}
