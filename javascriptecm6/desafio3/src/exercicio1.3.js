import axios from "axios";

class Github {
    static async getRepositories(repo) {
        
        try {
            
            const repositorie = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(repositorie.data);


        } catch (error) {
            console.warn("Repositório não existe!");
        }
    }
}

export default function teste() {
    Github.getRepositories("samuelLimaSantos/rocketseat-starter");
    Github.getRepositories("rocketseat/dihaosdhaosi");

}

