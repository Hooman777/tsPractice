let promiseHandler2 = function(arg: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        switch (arg) {
            case 1:
                resolve(arg+1);
                break;
            case 2:
                resolve(arg);
                break;
            default:
                reject(arg);
                break;
        }
    })
}

let pr2 = promiseHandler2(2);

pr2
.then((n: number) => console.log(`This is in the then ${n}`))
.catch((n: number) => console.log(`This is in the catch ${n}`));
