var express = require('express');
var router = express.Router();
var defaultModel = require('../models/User');
var response = require('../utils/response');

// get list
router.get('/', async function(req, res, next) {

  let filter = {};
  let page = (req.query.page) ? Number(req.query.page) : 1;
  let limit  = (req.query.limit) ? Number(req.query.limit) : response.API_DEFAULT_LIMIT;
  let offset  = (page - 1) * limit;
  let orderBy  = (req.query.orderby) ? req.query.orderby : response.API_DEFAULT_ORDER_BY;
  let orderType  = (req.query.ordertype) ? req.query.ordertype : response.API_DEFAULT_ORDER_TYPE;

  if(req.query.username)
    filter['username'] = new RegExp(req.query.username, 'i');
  
  if(req.query.keyword)
  {
    filter['username'] = new RegExp(req.query.username, 'i');
    //filter['other1'] = new RegExp(req.query.username, 'i');
    //filter['other2'] = new RegExp(req.query.username, 'i');
  }

  if(req.query.status)
    filter['status'] = req.query.status;
    
    
    
    /*
    Promise.all([
      defaultModel.find(filter,{password:0}).limit(limit).skip(offset).sort({[orderBy]: orderType}),
      defaultModel.find(filter).count()
    ]).then(([list, count]) => {
      
      res.json(response.success(list,req.method,count))
    }).catch((err) => {
        res.json(response.error(err.errmsg));
    });
    */
  
   let query = await defaultModel.find(filter,{password:0}).limit(limit).skip(offset).sort({[orderBy]: orderType});
   let count = await defaultModel.find(filter).count();

   res.json(response.success(query,req.method,count))

});

// post save
router.post('/', function(req, res) {
  let err = [];
  let data = new defaultModel(req.body);
  data.save((error,data) => {
    if(error)
    {
        err = response.getErrorMessage(error);
        res.json(response.error(err,true)); 
    }
    else
      res.json(response.success(data.id,req.method,1,response.API_SAVE_SUCCESS)); 
  });
});

// put update
router.put('/', function(req, res) {
  let err = [];
  
  
  defaultModel.findByIdAndUpdate(req.body.id,req.body,{new:true,runValidators:true,rawResult:true,context: 'query' },(error,data) => {
    if(error)
    {
        err = response.getErrorMessage(error);
        res.json(response.error(error,true)); 
    }
    else
      res.json(response.success(data)); 
  });
});

// put update
router.delete('/', function(req, res) {
  let err = [];
  defaultModel.findByIdAndDelete(req.query.id,(error) => {
    if(error)
    {
        err = response.getErrorMessage(error);
        res.json(response.error(error,true)); 
    }
    else
      res.json(response.success(response.API_DELETE_SUCCESS)); 
  });
});


module.exports = router;
