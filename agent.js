/*
*Copyright 2015 Kyle Haefner
*
* This program is free software: you can redistribute it and/or modify
*it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

**/


//#!/usr/bin/env node

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var agentSchema = new Schema({
  name: String,
  queue: String,
  no_answer_count: { type: Number,default:0},
  calls_answered: {type: Number, default:0},
  admin: Boolean,
  location: {type:String,default:""},
  created_at: Date,
  updated_at: Date
});

agentSchema.index({name:1,queue:1},{unique:true});

agentSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});


// the schema is useless so far
// we need to create a model using it
var Agent = mongoose.model('Agent', agentSchema);

// make this available to our users in our Node applications
module.exports = Agent;
