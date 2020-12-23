import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { json } from 'body-parser';
import { mongoose } from "@db/mongoose"
import { config } from "@config/config"

const logger = config.logger;

// console.log("config = \n\n" + JSON.stringify(config, null, 2));

// console.log("process.env.APP_SERVER_NAME = " + process.env.APP_SERVER_NAME);

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

mongoose.connect( (db) => {

		polka() // You can also use Express
			.use(
				json(),
				compression({ threshold: 0 }),
				sirv('static', { dev }),
				sapper.middleware()
			)
			.listen(PORT, err => {
				if (err) console.log('error', err);
			});

	}
);

