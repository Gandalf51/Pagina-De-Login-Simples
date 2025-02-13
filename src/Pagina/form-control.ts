const Email = (document.getElementById("Email-Input") as HTMLInputElement);
const Password = (document.getElementById("PassWord-Input") as HTMLInputElement);
const Button = (document.getElementById("LOGIN-BUTTON") as HTMLButtonElement);
const ErrorMessage = (document.getElementById("Error-Message") as HTMLParagraphElement)

type VerifyEmail = (Email: string) => boolean;
type VerifyPassword = (Email: string, PassWord: string) => boolean;
type objectDs = {Email: string, Password: string}

const ObjectDados: objectDs = {
    Email: "Guilherme@gmail.com",
    Password: "GambiarraMerda"
}
const Verify: VerifyEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

const VerifyLogin: VerifyPassword = (email, password) => {
    return email === ObjectDados.Email && password === ObjectDados.Password;
}


Button.addEventListener("click", e => {
    e.preventDefault();

    const emailValue = Email.value;
    const passwordValue = Password.value;

    if (Verify(emailValue)) {
        if(VerifyLogin(emailValue, passwordValue)) {
            console.log("Login feito")
            ErrorMessage.innerText = ""
        } else {
             ErrorMessage.innerText = "Email ou senha invalidos!"
        }
    } else {
      ErrorMessage.innerText = "Email invalido!"
    }
});
