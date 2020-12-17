import { blogs } from './_data';

export function get(req, res, netxt) {
    const { id } = req.params;

    const blog = blogs.find(j => j.id === id);

    if (blog) {
        res.setHeader('Content-Type', 'application/jason');
        res.end(JSON.stringify(blog));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'That blog does not exist'}));
    }

    
}