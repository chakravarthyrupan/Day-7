//map printing country names using map

/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
   var res = result.map((ele)=>console.log(ele.name.common))
 }*/

 //! filter and map country name with population less than 3 laks
 /*var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send();
 request.onload = function(){
     var data = request.response;
    var result = JSON.parse(data);
    var res = result.filter((x)=>x.population<300000)
    res.map((ele)=>console.log(ele.name.common))
 }
*/
//! reduce total population
/*var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send();
 request.onload = function(){
     var data = request.response;
    var result = JSON.parse(data);
    var res = result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res);
}
*/
