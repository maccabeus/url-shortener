"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
// import os from "os";
if (cluster_1.default.isMaster) {
    cluster_1.default.setupMaster({
        exec: "./build/server.js"
    });
    cluster_1.default.fork();
    /**
     * We could create multiple cluster for multi-threading
     * const cpus = os.cpus().length;
     * for (let n = 0; n < Math.ceil(cpus / 2); n++) {
     *    cluster.fork();
     * }
    */
    cluster_1.default.on('disconnect', (worker) => {
        console.log('disconnect', worker.id);
    });
    /**
     * When a worker dies, we create a new one
     */
    cluster_1.default.on('exit', (worker, code, signal) => {
        console.log('exit', worker.id, code, signal);
        cluster_1.default.fork();
    });
    cluster_1.default.on('listening', (worker, { address, port }) => {
        console.log("worker:id", worker.id);
    });
}
