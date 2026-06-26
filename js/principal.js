
async function verificarSesion() {

    const { data } = await supabaseClient.auth.getSession();

    if (!data.session) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("nombreUsuario").textContent =
        data.session.user.email;
}

verificarSesion();
