const delay = () => new Promise(resolve => {setTimeout(resolve, 1000)});

export default async function rolarPromise() {
    const result = await delay();
    console.log("1s");
    const result2 = await delay();
    console.log("2s");
    const result3 = await delay();
    console.log("3s");
    

}

