const childprocess =  require('child_process');
const { exit } = require('process');

try {
    childprocess.exec(`
       cd .. && mv index.html popup.html
    `)
    console.log('rename success')
    exit(0)
} catch (error) {
    exit(0)
}