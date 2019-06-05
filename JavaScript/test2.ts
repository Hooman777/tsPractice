let promiseHandler = function(message: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        if (message === 'hi') {
            resolve(message);
        } else {
            reject(message);
        }
    })
}

let pr = promiseHandler('hi');

pr
.then((message: string) => console.log(`This is in the then ${message}`))
.catch((message: string) => console.log(`This is in the catch ${message}`));
