const fs = require('fs')
const path = require('path')

const glob = require('glob')
const config = require('config')
const extNames = [
  'js', 'json', 'json5', 'hjson', 'toml',
  'coffee', 'iced', 'yaml', 'yml', 'cson',
  'properties', 'xml',
]

let custom = {}

const configDir = path.resolve(process.cwd(), 'config_test.*')
const files = glob.sync(configDir)

const file = files[0]

if (files.length > 1) {
  console.log(`存在多份 Config 文件，当前只处理 ${file} 配置，忽略其它文件`)
}

if (file) {
  if (extNames.includes(path.extname(file)) {
    custom = config.util.parseFile(file)
    config.util.extendDeep(config, custom)
  } else {
    console.log(`config 格式只支持 ${extNames.join(', ')}`)
  }
}

module.exports = config
