const path = require('path');
const DotEnv = require('dotenv-webpack');


module.exports = {
    webpack: config => { //Recieve config obj as param
        config.resolve.alias['@'] = path.resolve(__dirname);   // allows replacing ../../ with @ || @ -> point to the root folder
        config.plugins.push(new DotEnv({ silent: true })); // supress all warnings
        return config;
    }
}
