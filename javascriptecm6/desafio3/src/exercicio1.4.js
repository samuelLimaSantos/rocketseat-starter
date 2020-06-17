import axios from "axios";


const buscaUsuario = async usuario => {
    
    try {
        const user = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(user.data);
    } catch (error) {
        console.warn("Usuário não existe!");
    }

}


export default function teste() {
    buscaUsuario("samuelLimaSantos");
    buscaUsuario("diego3g");
    buscaUsuario("dsiohhyhd9as8ydf0fe3dh20g");

}

