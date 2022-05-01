// login js
var arr=JSON.parse(localStorage.getItem("info"))||[]
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
let login = async () => {
    let user_data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    user_data = JSON.stringify(user_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    let username = document.getElementById('username').value;
    getUserDetail(username, data.token);
    console.log(data,"data");
  };

  document.getElementById("submit").addEventListener("click", login);

// let s=20;


  let getUserDetail = async (username, token) => {
      console.log("here");
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let data = await res.json();
    arr.push(data)
    console.log("user data: ", data);
localStorage.setItem("info",JSON.stringify(arr))

  };
// export default getUserDetail;


