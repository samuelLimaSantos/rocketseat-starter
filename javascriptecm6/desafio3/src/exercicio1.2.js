import axios from "axios";

async function getUserFromGithub(user) {

    try {
        const usuario = await axios.get(`https://api.github.com/users/${user}`);
        console.log(usuario.data);
        
    } catch (error) {
        console.log("Uusário não existe");
    }

}

export default function teste() {
    getUserFromGithub("diego3g");
    getUserFromGithub("samuelLimaSantos");
    getUserFromGithub("diaosdyhaosidjj034dyu3");

}