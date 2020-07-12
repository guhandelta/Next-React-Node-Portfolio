const path = require('path');


module.exports = {
    webpack: config => { //Recieve config obj as param
        config.resolve.alias['@'] = path.resolve(__dirname);   // allows replacing ../../ with @ || @ -> point to the root folder
        return config;
    }
}
