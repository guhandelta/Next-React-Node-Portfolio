// This is a dynamic API route, the id will be obtained from the request object
import axios from 'axios'

// The Api fn() won't be a part of the bundle, that are received back to the browser, as they're a part of the development server
// When this app is deployed, this fn() will be a included as a serverless fn(), in the cloud, as this app will be deployed in Vercel
export default async (req, res) => {
    try {
        const axiosRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);// query.name_of_this_file

        const post = axiosRes.data;
        res.status(200).json(post);
    } catch (err) {
        console.error(err);
        res.status(err.status || 400).json({ message: 'Ápi Error!' }); //If there is no status on the error, return 400
    }
}



