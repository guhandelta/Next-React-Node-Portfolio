const path = require('path');
const DotEnv = require('dotenv-webpack');


module.exports = {
    webpack: config => { //Recieve config obj as param
        config.resolve.alias['@'] = path.resolve(__dirname);   // allows replacing ../../ with @ || @ -> point to the root folder
        config.plugins.push(new DotEnv({ silent: true })); // supress all warnings
        return config;
    },
    env: {// This is dont to allow using environment variables in browser, as environment variables are only for serverside
        //- it is done by informing Next server, about which variables to expose to the browser
        AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
    }
}
