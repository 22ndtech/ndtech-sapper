import {jobs } from './_data';

export function get(req, res, netxt) {
    const { id } = req.params;

    const job = jobs.find(j => j.id === id);

    res.setHeader('Content-Type', 'application/jason');
    res.end(JSON.stringify(job));
}