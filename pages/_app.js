import '../styles/main.scss'
import '../styles/bootstrap.min.css';

class App extends React.Component {

    // getInitialProps() disable's static optimizaiton and providing it here, will disable static optimization for all the pages in this app
    // Providing getInitialProps() in _app also disables all the getInitialProps() and they can be called from here.
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        // Check if the component passed in has a getInitialProps and call it
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }

}

export default App;

