import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
// var name=document.getElementById("search").value
// let url=`www.themealdb.com/api/json/v1/1/search.php?s=${name}`
// let url="https://fakestoreapi.com/products/category/electronics"
let container=document.getElementById("products")
import{getData,append} from "./fetch.js";
// import getUserDetail from "./login.js";

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
