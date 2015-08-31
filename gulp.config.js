module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';
    var report = './report/';
    var root = './';
    var temp = './tmp/';

    var config = {
        /**
        * File Paths
        */

        alljs: [
          './src/**/*.js',
          './*.js'
        ]
    };

    return config;
};
