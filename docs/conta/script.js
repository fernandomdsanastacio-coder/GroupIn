// ==============================
// CONFIG SUPABASE
// ==============================

const SUPABASE_URL = 'https://fpttcfiznejjptwqamkk.supabase.co';
const SUPABASE_KEY = 'sb_publishable_aDsQe-his4DJBMn-NJKXAw_oCu0r8pK';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// ==============================
// DOM
// ==============================

const container = document.getElementById('container');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const signInBtn = document.getElementById('sign-in');


// ==============================
// TOGGLE LOGIN / SIGNUP
// ==============================

const toggle = () => {
    if (container) {
        container.classList.toggle('sign-in');
        container.classList.toggle('sign-up');
    }
};

setTimeout(() => {
    if (container) container.classList.add('sign-in');
}, 200);


// ==============================
// LOGIN
// ==============================

async function handleSignIn(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        alert("Preenche todos os campos.");
        return;
    }

    const originalText = signInBtn.innerText;
    signInBtn.innerText = "A entrar...";
    signInBtn.disabled = true;

    try {

        const { data, error } = await supabaseClient
            .from("Utilízadores")
            .select("*")
            .eq("username", username)
            .eq("password", password)
            .single();

        if (error || !data) {
            throw new Error("Username ou password incorreta");
        }

        console.log("Login bem sucedido:", data);

        alert("Bem-vindo " + data["Nome de exibição"]);

        // guardar sessão
        localStorage.setItem("user", JSON.stringify(data));

        // REDIRECIONAR PARA EVENTOS
        window.location.href = "../eventos.html";

    } catch (error) {

        console.error("Erro login:", error);
        alert(error.message);

    } finally {

        signInBtn.innerText = originalText;
        signInBtn.disabled = false;

    }

}


// ==============================
// EVENT LISTENER
// ==============================

if (signInBtn) {
    signInBtn.addEventListener("click", handleSignIn);
}