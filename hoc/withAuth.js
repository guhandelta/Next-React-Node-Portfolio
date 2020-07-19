
// function withAuth(Component) {
//     return function (props) {
//         return <Component title="Welcome Authenticated User" {...props} />
//     }
// }

// Simples form of above fn()
const withAuth = Component => props => <Component title="Welcome Authenticated User" {...props} />

export default withAuth
