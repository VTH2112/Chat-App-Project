import { SignIn } from "../Pages/Login/signIn.js"

const app = document.querySelector(".container-fluid");

const setScreen = (container) => {
    app.innerHTML = "";
    app.appendChild(container);
}

const signInScreen = new SignIn();
setScreen(signInScreen.container)

export { setScreen }