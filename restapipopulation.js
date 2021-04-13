var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var countrydata=JSON.parse(this.response);
    //console.log(countrydata);
  var country=countrydata.reduce((acc,country)=>{
       return acc+country.population;
   },0);
   console.log(country); 

}