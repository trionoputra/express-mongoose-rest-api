var mongoose = require('mongoose'); 
var validation = require('../utils/validation'); 
var uniqueValidator = require('mongoose-unique-validator');
var Bcrypt = require("bcryptjs");
var moment = require('moment');

var UserSchema = new mongoose.Schema({  
  username: { type: String, required: validation('required'),unique:true,trim: true,minlength: [6, validation('minChar')],} ,
  password: { type: String, required: validation('required'),trim: true,minlength: [6, validation('minChar')]} ,
  last_login: { type: Date, default: Date.now },
  status: { type: String,enum: {values: ['Active', 'InActive'], message: validation('enum')} }
}, { collection: 'user',versionKey: false });

UserSchema.set('toObject', { virtuals: true })
UserSchema.set('toJSON', { virtuals: true ,transform: function (doc, ret) {   delete ret._id;delete ret.last_login  }})


UserSchema.pre('save', function(next) {
  const data = this;
  if(data.password)
    data.password = Bcrypt.hashSync(data.password, 10);
  next();
});

UserSchema.pre('findOneAndUpdate', function(next) {
  const data = this._update;
  if(data.password)
    data.password = Bcrypt.hashSync(data.password, 10);
  next();
});

UserSchema.virtual('date')
  .get(function() {
    return moment(this.last_login).format("YYYY-MM-DD HH:mm:ss");
});

UserSchema.plugin(uniqueValidator, { message:  validation('unique')});
mongoose.model('User', UserSchema);


module.exports = mongoose.model('User');