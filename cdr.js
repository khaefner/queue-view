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
var cdrSchema = new Schema({
  uuid: String,
  name: {type:String,default:"Anonymous"},
  number: {type:String,default:"0000000000"},
  agent: {type:String,default:"undefined"},
  agent_uuid: {type:String,default:"undefined"},
  queue: {type:String,default:"undefined"},
  member_joined_time:Date,
  member_leaving_time:Date,
  agent_called_time:Date,
  agent_answered_time:Date,
  call_termination_cause:{type:String,default:"undefined"},
  call_cancel_reason:{type:String,default:"undefined"},
});


// the schema is useless so far
// we need to create a model using it
var CDR = mongoose.model('CDR', cdrSchema);

// make this available to our users in our Node applications
module.exports = CDR;
