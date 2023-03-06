
//1. For the given JSON iterate over all fsor loops(for, for in, for of , forEach)

var  data=[
    {
        "name":"Kumar",
        "age":"23",
        "gender":"Male",
        "id":"2345"
    },
    {
        "name":"Gopal",
        "age":"24",
        "gender":"Male",
        "id":"2346"
    }

]; 

//for loop


for(var i = 0; i <data.length; i++) {
    var res = data[i];

    console.log(res);
}


//for Each

data.forEach(function(res) {
    console.log(res.id); }
    );


//for In


for (var i in data) {
if (data.hasOwnProperty(i)) {
  console.log(data[i].name);  
  console.log(data[i].age);  
  console.log(data[i].gender);  

}
}



//for Of

let text ="This is Ram id ";
for (let x of data[i].id) {
 text += x; 
}
 console.log(text);

 
 




