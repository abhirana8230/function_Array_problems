var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var result=data.forEach((element,index)=>{
        console.log("Name:",element.name," ","Capital:",element.capital," ","Flag:",element.flag);
        

    })
    
    
}
