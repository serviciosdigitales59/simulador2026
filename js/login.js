document
.getElementById("btnLogin")
.addEventListener("click", login);

async function login(){

const usuario=document
.getElementById("usuario").value;

const password=document
.getElementById("password").value;

const {data,error}=await supabaseClient.auth.signInWithPassword({

email:usuario,

password:password

});

if(error){

alert("Usuario incorrecto");

return;

}

window.location="panel.html";

}