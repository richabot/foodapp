// index js
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let container=document.getElementById("products")
import{getData,append} from "./fetch.js";


document.querySelector("#btn1").addEventListener("click",searchbar)
function searchbar()
{
    var name=document.getElementById("search").value
    let url=`https://themealdb.com/api/json/v1/1/search.php?s=${name}`

   getData(url).then((res)=>{
       container.innerHTML=null;
        append(res,container);
        // console.log(res,"resio")
    //   return res.json()
    })
   


}
var div=document.getElementById("infodiv")
var das=JSON.parse(localStorage.getItem("info"))
console.log(das,"das")
var p1=document.createElement("p");
p1.innerText=das[0].username;
var p2=document.createElement("p")
p2.innerText=das[0].email;
div.append(p1,p2)



// import getUserDetail from "./login.js";
// console.log(getUserDetail(),"userdetails")

// etUserDetail().then((res)=>{
//     console.log(res,"res")
// })
// function callendi(data){
//     console.log(data)

// }



// fetch(url).then((res)=>{
//     // append(res,container);
//   return res.json()
// })
// .then((res)=>{
// console.log(res)
// })

// .catch((err)=>
// {
// console.log(err)
// })
