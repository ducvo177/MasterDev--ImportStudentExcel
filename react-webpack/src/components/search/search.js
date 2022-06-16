import React from "react";
import './search.css';


const Search=()=>{

    
        
    const search=()=>{
    fetch('http://localhost:3000/student')
   
    .then(function(response){
      return response.json();
    })
    .then(function(data){
    
    var nameSearch=document.getElementById("name-search");
    var idSearch=document.getElementById("id-search");
    var searchResults=document.getElementById("search-result");
  
      for(let i=0; i<data.length; i++){
        
        if(data[i]. studentid==idSearch.value){
             var html=`
            <h2>Tìm kiếm theo id</h2>
            <table style="width:100%">
            <tr>
              <th>ID</th>
              <th>Quận/Huyện</th>
              <th>Mã Học Sinh</th>
              <th>Lớp</th>
              <th>Tên</th>
              <th>Ngày Sinh</th>
              <th>Giới tính</th>
              <th>Dân Tộc</th>
              <th>Điện Thoại</th>
              <th>Tổng điểm sơ tuyển</th>
              <th>Kết quả</th>
            </tr>
            <tr>
              <td>${data[i].id}</td>
              <td>${data[i].district}</td>
              <td>${data[i].studentid}</td>
              <td>${data[i].class}</td>
              <td>${data[i].name}</td>
              <td>${data[i].day}/${data[i].month}/${data[i].year}</td>
              <td>${data[i].gender}</td>
              <td>${data[i].ethnicity}</td>
              <td>${data[i].tel}</td>
              <td>${data[i].sumall}</td>
              <td>${data[i].note}</td>
            </tr>
            
          </table>
            `
            searchResults.innerHTML+=html;
        }
        if(data[i]["name"]==nameSearch.value){
       
           var  html=`
            <h2>Tìm kiếm theo tên</h2>
            <table style="width:100%">
            <tr>
              <th>ID</th>
              <th>Quận/Huyện</th>
              <th>Mã Học Sinh</th>
              <th>Lớp</th>
              <th>Tên</th>
              <th>Ngày Sinh</th>
              <th>Giới tính</th>
              <th>Dân Tộc</th>
              <th>Điện Thoại</th>
              <th>Tổng điểm sơ tuyển</th>
              <th>Kết quả</th>
            </tr>
            <tr>
              <td>${data[i].id}</td>
              <td>${data[i].district}</td>
              <td>${data[i].studentid}</td>
              <td>${data[i].class}</td>
              <td>${data[i].name}</td>
              <td>${data[i].day}/${data[i].month}/${data[i].year}</td>
              <td>${data[i].gender}</td>
              <td>${data[i].ethnicity}</td>
              <td>${data[i].tel}</td>
              <td>${data[i].sumall}</td>
              <td>${data[i].note}</td>
            </tr>
            
          </table>
            `
            searchResults.innerHTML+=html;
        }
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });    
    }
    return(
        <div className="search d-flex ">
            <div className="mx-auto search-container">
            <label className="name-label p-2" >Nhập tên:</label>
            <input type="text" className= "search--input" id="name-search"/>
            <label className="id-label p-3" >Nhập id:</label>
            <input type="text" className= "search--input" id="id-search"/>
          
           <button type="button" className="search-btn btn btn-success"
           onClick={()=>{
            search();
           }}
           >Search</button>

           <div className="search-result  " id="search-result"></div>
            </div>
           
            
          
           
         </div>
    )
}
export default  Search;