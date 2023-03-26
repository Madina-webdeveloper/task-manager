"use strict"

$("#log_out").addEventListener("click", ()=>{
    
    localStorage.clear()
 location.replace("login.html")
} )