async function verificarSesion(){

const {data}=await supabaseClient.auth.getSession();

if(!data.session){

window.location="index.html";

}

}

verificarSesion();