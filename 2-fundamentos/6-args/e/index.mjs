import minimist from "minimist"

import soma from "../../2-export-import/modulo.mjs"

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

console.log(soma(a, b))

