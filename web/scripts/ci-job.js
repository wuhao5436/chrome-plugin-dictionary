const childprocess =  require('child_process');
const { exit } = require('process');

try {
    childprocess.exec(`
       cd ../dist && rm -rf ./assets
    `)
    console.log('clear job done')
    exit(0)
} catch (error) {
    exit(0)
}