import React from "react";
import './upload.css';

import readXlsxFile from "read-excel-file";
let Json=[];
const Upload=()=>{
  let check=0;
 
 const readEx= (file)=>{
  readXlsxFile(file).then(function(data){
    var i=0;
    var headers=[];
    var json_object=[];
    data.map((row,index)=>{
      if(i==3){
        row=[
          'id',
          'school', 
         'district', 
         'studentid',
          'class',
         'name',
         'day',
         'month',
          'year',
          'gender',
         'birthplace',
          'ethnicity',
          'live',
          'tel',
         'grade1',
         'grade2',
         'grade3',
         'grade4',
         'grade5',
          'sum5',
         'priority',
         'sumall',
          'note',
        ];
        headers=row;
      }
      if(i>4){
        var temp={};
        for (var x=0;x<row.length;x++){
          if(typeof row[x]=='string'){
            temp[headers[x]]=row[x].replace(/\n/g, '');;
          }else{
            temp[headers[x]]=row[x];
          }
        }
        
        json_object.push(temp);
      }
      i++;

     });
     
     console.log(JSON.stringify(json_object, null, 2));
     Json=json_object;
     check=1;
     
     
  })

 }
  const redirect=()=>{
   if(check==0){
    alert('Nhập file excel!!')
   }else{
    for(let i=0;i<Json.length;i++){
      fetch('http://localhost:3000/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Json[i]),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        console.log(Json)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
   
   }
  }


    
      
    
    return(
     <div className="upload d-flex ">
         <div className="mx-auto upload-container">
            
         <input type="file" className= "upload-input form-control  form-control-lg m-3 "
        id="file_upload"
        onChange={(e)=>{
            const file=e.target.files[0];
            readEx(file);
        }}
         />
         <button type="button" className="upload-btn btn btn-success" 
         onClick={()=>{
          redirect();
         }}
         >Import</button>
        
         </div>
        
      </div>
        )

}
export default Upload;
