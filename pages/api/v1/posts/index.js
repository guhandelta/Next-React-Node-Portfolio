import axios from 'axios'

// The Api fn() won't be a part of the bundle, that are received back to the browser, as they're a part of the development server
// When this app is deployed, this fn() will be a included as a serverless fn(), in the cloud, as this app will be deployed in Vercel
export default async (req, res) => {
    try {
        const axiosRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = axiosRes.data;
        res.status(200).json(posts.slice(0, 10));
    } catch (err) {
        console.error(err);
        res.status(error.status || 400).end('Ápi Error!'); //If there is no status on the error, return 400
        // end() to end the response
    }
}


