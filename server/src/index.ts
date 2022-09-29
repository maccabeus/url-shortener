import cluster from "cluster";
// import os from "os";

if (cluster.isMaster) {

    cluster.setupMaster({
        exec: "./build/server.js"
    })
    cluster.fork();
    /** 
     * We could create multiple cluster for multi-threading 
     * const cpus = os.cpus().length;
     * for (let n = 0; n < Math.ceil(cpus / 2); n++) {
     *    cluster.fork();
     * }
    */
    cluster.on('disconnect', (worker) => {
        console.log('disconnect', worker.id);
    })
    /**
     * When a worker dies, we create a new one
     */
    cluster.on('exit', (worker, code, signal) => {
        console.log('exit', worker.id, code, signal);
        cluster.fork();
    })
    cluster.on('listening', (worker, { address, port }) => {
        console.log("worker:id", worker.id);
    });
}