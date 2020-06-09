const routes = require('next-routes');

module.exports = routes()
    .add('portfolio', '/portfolios/:id')
    // Render portfolio page, whenever this route is visited. `:id` => dynamic routes
    // Another way to ccreate dyanmic pages, by mentioningthe page to be rendered and the path in whihc it shoudl be rendered
    // This is what that is sent as params through <Link route={`/portfolios/${post.id}`}></Link> in portfolio.js

