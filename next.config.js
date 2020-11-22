// const path = require('path');
// const DotEnv = require('dotenv-webpack'); => No longer required, as NextJS 9.4.x has this feature, built into it


module.exports = {
    /* Since the images are fetched from an unverified host, it should be mentioned in the configuration-
    - file, that the source is authentic */
    images:{
        domains: ['picsum.photos'],
        deviceSizes: [ 640, 750 ], //Array of breakpoints for the sizes of the devices for which the-
        //- images should be optimized for 
    },
    /* Absolute imports and aliases - NextJS 9.4.x - has eliminated the use of ../../../, so the `@` module is not requried anymore */
    // webpack: config => { //Receive config obj as param
    //     config.resolve.alias['@'] = path.resolve(__dirname);   // allows replacing ../../ with @ || @ -> point to the root folder
    //     // config.plugins.push(new DotEnv({ silent: true })); // supress all warnings
    //     return config;
    // },
    env: {// This is done to allow using environment variables in browser, as environment variables are only for serverside
        //- it is done by informing Next server, about which variables to expose to the browser
        AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
        BASE_URL: process.env.BASE_URL
    },
    
}
