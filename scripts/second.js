import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
// var name=document.getElementById("search").value
// let url=`www.themealdb.com/api/json/v1/1/search.php?s=${name}`
// let url="https://fakestoreapi.com/products/category/electronics"
let container=document.getElementById("products")
import{getData,append1} from "./fetch.js";

// document.querySelector("#btn1").addEventListener("click",searchbar)

    // var name=document.getElementById("search").value
    let url=`https://themealdb.com/api/json/v1/1/random.php`

   getData(url).then((res)=>{
        append1(res,container);
        // console.log(res,"resio")
    //   return res.json()
    })
   




