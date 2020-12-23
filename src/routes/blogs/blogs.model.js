/*jslint node: true */
'use strict';

import {mongoose} from "@db/mongoose"
let autoIncrementPlugin = require('mongoose-auto-increment');

let Schema = mongoose.Schema;

let BlogsSchema = new Schema({
    id: Number,
    title: String,
    details: String,
});

BlogsSchema.set('timestamps', true); // include timestamps in docs
BlogsSchema.set(
'toJSON',
{
    getters: true,
    virtuals: true
});


// apply the unique id plugin
BlogsSchema.plugin(autoIncrementPlugin);

export let BlogsModel = mongoose.model('Blog', BlogsSchema);
