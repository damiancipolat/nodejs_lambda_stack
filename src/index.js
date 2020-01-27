const config = require('config');

const values = config.get('values');

const {
    loan,
    table
} = config.get('system-env');

console.log('> System environments:', loan, table);
console.log('> Values:',values);