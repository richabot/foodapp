// import getUserDetail from "./login.js";
// console.log(getUserDetail,"userdetails")


// login
// import navbar from "../components/navbar.js";
// document.getElementById("navbar").innerHTML=navbar();
// let login = async () => {
//     let user_data = {
//       username: document.getElementById("username").value,
//       password: document.getElementById("password").value,
//     };

//     user_data = JSON.stringify(user_data);

//     let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
//       method: "POST",
//       body: user_data,

//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     let data = await res.json();

//     let username = document.getElementById('username').value;
//     getUserDetail(username, data.token);
//     console.log(data,"detre");
//   };

//   document.getElementById("submit").addEventListener("click", login);

//   let getUserDetail = async (username, token) => {
//       console.log("here");
//     let res = await fetch(
//       `https://masai-api-mocker.herokuapp.com/user/${username}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     let data = await res.json();
//     console.log("user data: ", data.username);
//     // return z
// // return data
// // var z=data.username;

//   };
// //   export {z}


// index
// import navbar from "../components/navbar.js";
// document.getElementById("navbar").innerHTML=navbar();

// let container=document.getElementById("products")
// import{getData,append} from "./fetch.js";


// document.querySelector("#btn1").addEventListener("click",searchbar)
// function searchbar()
// {
//     var name=document.getElementById("search").value
//     let url=`https://themealdb.com/api/json/v1/1/search.php?s=${name}`

//    getData(url).then((res)=>{
//         append(res,container);

//     })
   


// }


// import getUserDetail from "./login.js";
// console.log(getUserDetail(),"userdetails")



