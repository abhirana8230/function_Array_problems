var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var result=data.filter((item)=>{
        return item.currencies[0].name==="United States dollar";
    })
    
        for(var i=0;i<result.length;i++){
            console.log(result[i].name)
        }
    

}