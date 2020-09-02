// const path = require('path');
// const DotEnv = require('dotenv-webpack'); => No longer required, as NextJS 9.4.x has this feature, built into it


module.exports = {
    /* Absolute imports and aliases - NextJS 9.4.x - has eliminated the use of ../../../, so the `@` module is not requried anymore */
    // webpack: config => { //Receive config obj as param
    //     config.resolve.alias['@'] = path.resolve(__dirname);   // allows replacing ../../ with @ || @ -> point to the root folder
    //     // config.plugins.push(new DotEnv({ silent: true })); // supress all warnings
    //     return config;
    // },
    env: {// This is done to allow using environment variables in browser, as environment variables are only for serverside
        //- it is done by informing Next server, about which variables to expose to the browser
        AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
    }
}
