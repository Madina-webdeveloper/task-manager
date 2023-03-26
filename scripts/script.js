"use strict";

let token = localStorage.getItem("token");
if (token) {
  location.replace("index.html");
}

$(".form").addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log(1233);

  let tokenData = {};

  await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email:$(".email").value,
      password:$(".password").value
    })
  }).then(response=>response.json()).then(result=>tokenData=result)

  if(tokenData.token){
    localStorage.setItem("token",JSON.stringify(tokenData.token))
    location.replace("index.html")
    alert("Welcome to Task Manager App")
  }else{
    alert("Wrong EMAIL or PASSWORD !!!")
  }
});
