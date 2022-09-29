import cluster from "cluster";
import os from "os";

if (cluster.isMaster) {

    cluster.setupMaster({
        exec: "./build/server.js"
    })

    const cpus = os.cpus().length;

    for (let n = 0; n < Math.ceil(cpus / 2); n++) {
        cluster.fork();
    }

    cluster.on('disconnect', (worker) => {
        console.log('disconnect', worker.id);
    })

    cluster.on('exit', (worker, code, signal) => {
        console.log('exit', worker.id, code, signal);
        cluster.fork();
    })
    cluster.on('listening', (worker, { address, port }) => {
        console.log("worker:id", worker.id);
        // console.log('listening', worker.id, `${address}:${port}`);
    });
}