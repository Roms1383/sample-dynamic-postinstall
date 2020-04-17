const fs = require('fs')
const path = require('path')
const execa = require('execa')

const find = () => {
  const parent = path.join(process.cwd(), '..')
  if (path.basename(parent) === 'node_modules') {
    const grandparent = path.join(parent, '..')
    const configuration = path.join(grandparent, '.buildrc')
    if (fs.existsSync(configuration)) {
      let settings
      try {
        settings = JSON.parse(fs.readFileSync(configuration, {encoding:'utf8'}))
      } catch (e) { console.log('unable to parse .buildrc') }
      const { build = undefined } = settings || {}
      if (build === 'client' || build === 'server') {
        // replace index.ts only if specific build, to allow for correct exports
        fs.copyFileSync(path.join(process.cwd(), 'src', `index.${build}.ts`), path.join(process.cwd(), 'src', 'index.ts'))
        return `tsconfig.${build}.json`
      }
    }
  }
  return 'tsconfig.json'
}

const found = find()

execa('yarn', ['build', '--project', found])
.stdout
.pipe(process.stdout)