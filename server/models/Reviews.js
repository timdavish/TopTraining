/**
 * Reviews mongoose model
 */
'use strict';

// Module dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var ReviewSchema = new Schema({
	trainer: {
		type: ObjectId,
		ref: 'User',
		required: true
	},
    author: {
        type: String,
		required: true
    },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 5,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    type: {
        type: String,
        enum: ['Verified Purchase', 'Client', 'Testimonial'],
        default: 'Client',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    }
});

// Set mongoose model
mongoose.model('Review', ReviewSchema);
