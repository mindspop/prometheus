#!/usr/bin/env node

const path = require('path')

const program = require('commander')
const shell = require('shelljs')

const pkg = require('../package.json')
const gulp = path.join(__dirname, '../node_modules/.bin/gulp')
const gulpfile = path.join(__dirname, '../gulpfile.js')

const gulpCommand = `${gulp} --color --gulpfile ${gulpfile}`

program
  .version(pkg.version)
  .option('-v --version', pkg.version)

program
  .command('start')
  .action(() => {
    shell.exec(gulpCommand)
  })

program
  .command('render')
  .action(() => {
    shell.exec(`${gulpCommand} render`)
  })

program
  .command('mock')
  .action(() => {
    shell.exec(`${gulpCommand} mock`)
  })

program
  .command('clean')
  .action(() => {
    shell.exec(`${gulpCommand} clean`)
  })

program.parse(process.argv)
