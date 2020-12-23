// import { blogs } from './_data';
import { v4 as uuidv4 } from 'uuid';

export function get(req, res, next) {
  
  res.end(JSON.stringify(blogs));

}

export function post(req, res, next) {
  const { title, date, details } = req.body;
  const id = uuidv4();

  blogs.push({ title, date, details, id });

  res.end(JSON.stringify(blogs));
}
