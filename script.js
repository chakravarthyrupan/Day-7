//!map printing country names using map

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
   var res = result.map((ele)=>console.log(ele.name.common))
 
}
 //! filter and map country name with population less than 3 laks
 var request1 = new XMLHttpRequest();
 request1.open("GET","https://restcountries.com/v3.1/all",true)
 request1.send();
 request1.onload = function(){
     var data1 = request1.response;
    var result1 = JSON.parse(data1);
    var res1 = result1.filter((x)=>x.population<300000)
    res1.map((ele)=>console.log(ele.name.common))
 }

//! reduce total population
var request2 = new XMLHttpRequest();
 request2.open("GET","https://restcountries.com/v3.1/all",true)
 request2.send();
 request2.onload = function(){
     var data2 = request2.response;
    var result2 = JSON.parse(data2);
    var res2 = result2.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res2);
}

