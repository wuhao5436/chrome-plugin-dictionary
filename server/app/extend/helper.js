

const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.formateTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');
