// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '303124383478479', // your App ID
        'clientSecret'  : '06da670ab8151c3ea025ee0e155db698', // your App Secret
        'callbackURL'   : 'https://thecloset.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'xYYbi5wbSPYaqMJZdXNpCEZds',
        'consumerSecret'    : 'j8SZVC7T34g7Qg1FwT9mg9eoF4qA9S9T4FHG1JuRP3YRWS8MjK',
        'callbackURL'       : 'https://thecloset.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'    :  '874728994360-neo840acv46kghbkp27b20qoojgvrueh.apps.googleusercontent.com',
        'clientSecret'  : '55gnHmnCxh_4usj7aD6dBTAr',
<<<<<<< HEAD
        // 'callbackURL'   : 'http://localhost:3000/auth/google/callback'
=======
//         'callbackURL'   : 'http://localhost:3000/auth/google/callback'
>>>>>>> c24dea82321067333c086c3509cd5a430e247326
        'callbackURL'   : 'http://www.frazzle-pop.com/auth/google/callback'
    }

};
