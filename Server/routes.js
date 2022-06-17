var express = require('express');
var router = express.Router();
var Student = require('./Models/Student');
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        Student.getStudentById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Student.getAllStudent(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/',function(req,res,next){
    Student.addSV(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});
router.delete('/:id',function(req,res,next){
    Student.deleteSV(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

module.exports=router;