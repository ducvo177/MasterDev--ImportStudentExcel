var db = require('../Dbconnection');

var Student={
	getAllStudent:function(callback){
		return db.query("Select * from student",callback);
	},
	getStudentById:function(id,callback){
		return db.query("select * from student where studentid=?",[id],callback);
	},
	addSV:function(student,callback){
		return db.query("Insert into student(id,school,district,studentid,class,name,day,month,year,gender,birthplace,ethnicity,live,tel,grade1,grade2,grade3,grade4,grade5,sum5,priority,sumall,note) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[student.id,student.name,student.school,student.district,student.studentid,student.class,student.name,student.day,student.month,student.year,student.gender,student.birthplace,student.ethnicity,student.live,student.tel,student.grade1,student.grade2,student.grade3,student.grade4,student.grade5,student.sum5,student.priority,student.sumall,student.note],callback);
	},
	deleteSV:function(id,callback){
		return db.query("delete from student where Id=?",[id],callback);
	},
};
 module.exports=Student;