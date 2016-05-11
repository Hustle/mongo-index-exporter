/*!
 * mongo-index-exporter
 * Copyright(c) 2016 martinerko <martinerko@gmail.com>
 * MIT Licensed
 */

module.exports = function help() {
  console.log('');
  console.log('  Usage: program connectionString [options]\n');
  console.log('  Options:\n');
  console.log('    --username <username>               specifies a username with which to authenticate to a MongoDB database that uses authentication.');
  console.log('    --password <password>               specifies a password with which to authenticate to a MongoDB database that uses authentication.');
  console.log('');
  console.log('  Sample:\n');
  console.log('    node ./bin localhost:27017/test');
  console.log('    node ./bin ds012345.myserver.com:56789/dbname --username dbuser --password dbpassword');
};
