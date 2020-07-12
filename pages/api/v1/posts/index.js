import { data } from '@/data'

// The Api fn() won't be a part of the bundle, that are received back to the browser, as they're a part of the development server
// When this app is deployed, this fn() will be a included as a serverless fn(), in the cloud, as this app will be deployed in Vercel
function handlePosts(req, res) {
    res.status(200).json(data);
}

export default handlePosts;
