class Commitment {
    constructor (executor) {
        this.status = "pending";
        this.value = void(0);
        this.reason = void(0);
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (value instanceof Promise) {
                return value.then(resolve, reject)
            }

            setTimeout(() => {
                if (this.status === "pending") {
                    this.status = "resolved";
                    this.value = value;
                    this.onResolvedCallbacks.forEach(cb => cb(value));
                }
            })

        }
        const reject = (reason) => {
            setTimeout(() => {
                if (this.status === "pending") {
                    this.status = "rejected";
                    this.reason = reason;
                    this.onRejectedCallbacks.forEach(cb => cb(reason));
                }
            })
        }

        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then (onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
        onRejected = typeof onRejected === "function" ? onRejected : reason => {
            throw reason
        };
        const resolveCommitment = (Commitment2, x, resolve, reject) => {
            if (Commitment2 === x) {
                return reject(new TypeError("A promise cannot be resolved with itself"))
            }
            let then, called;
            if (x !== null && (typeof x === "object" || typeof x === "function")) {
                try {
                    then = x.then;
                    if (typeof then === "function") {
                        then.call(x, y => {
                            if (called) return
                            called = true;
                            resolveCommitment(Commitment2, y, resolve, reject);
                        }, r => {
                            if (called) return
                            called = true;
                            reject(r)
                        })
                    } else {
                        resolve(x)
                    }
                } catch (e) {
                    if (called) return
                    called = true;
                    reject(e)
                }
            } else {
                resolve(x)
            }
        }
        let Commitment2, x;
        if (this.status === "resolved") {
            Commitment2 = new Commitment((resolve, reject) => {
                setTimeout(() => {
                    try {
                        x = onFulfilled(this.value);
                        resolveCommitment(Commitment2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                });
            })

        }
        if (this.status === "rejected") {
            Commitment2 = new Commitment((resolve, reject) => {
                setTimeout(() => {
                    try {
                        x = onRejected(this.reason);
                        resolveCommitment(Commitment2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
        }
        if (this.status === "pending") {
            Commitment2 = new Commitment((resolve, reject) => {
                this.onResolvedCallbacks.push((value)=> {
                    try {
                        x = onFulfilled(value);
                        resolveCommitment(Commitment2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
                this.onRejectedCallbacks.push((reason) => {
                    try {
                        x = onRejected(reason);
                        resolveCommitment(Commitment2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
        }

        return Commitment2
    }
}


var p = new Commitment((resolve, reject) => {
  resolve('resolve valueeeee--------')
})
p.then((val) => { console.log('1', val)  })
p.then((val) => { console.log('2', val)  })
// export default Commitment