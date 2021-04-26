document.getElementById("logout").addEventListener("click", (e)=>{
    localStorage.setItem("JWT", "");
    location.reload();
})