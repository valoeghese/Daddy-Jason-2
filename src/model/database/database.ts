import * as fs from 'fs'

import path from "path";
const runDir = path.join(path.resolve(), "run");

// create the run folder wherein everything is stored if not exists
if (!fs.existsSync(runDir)) {
    fs.mkdirSync(runDir);
}

interface GuildSettings {
    
}

interface UserSettings {

}

interface Database {
    guildSettings: {[key: string]: GuildSettings};
    userSettings: {[key: string]: UserSettings};
}

// load the database
const databaseLocation = path.join(runDir, "database");
const database: Database = (() => {
    if (fs.existsSync(databaseLocation)) {
        return JSON.parse(fs.readFileSync(databaseLocation, 'utf8'));
    } else {
        return {
            "guildSettings": {},
            "userSettings": {}
        };
    }
})();
