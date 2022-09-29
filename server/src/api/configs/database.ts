import { ConnectionSettings } from "../library/db/mido.types";
import dotEnv from "dotenv";

dotEnv.config();

const connectionSettings: ConnectionSettings = {
    default: {
        conn: encodeURI(process.env.DB_HOST ?? "") ?? "",
        db: process.env.DB_NAME ?? "",
        user: process.env.DB_USER ?? "",
        password: process.env.DB_PASSWORD ?? "",
    }
}

export const urlTable: string = "url";

export default connectionSettings;