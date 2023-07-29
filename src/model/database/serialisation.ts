import * as fs from 'fs'
import path from "path";

// this file handles deserialising and deserialising for read/write to the actual database file
// converting between useful class objects used in the live runtime database and the stored JSON data

// === STORED DATABASE FORMAT === //

export interface VariantData {
    name: string,
    image: string
}

export interface LecturerData {
    name: string,
    nextPrintNumber: number,
    variants: VariantData[]
}

export interface GuildSettings {
    minSpawnMessages: number,
    maxSpawnMessages: number,
    channels: string[],
    nextPrintNumber: number,
    lecturers: LecturerData[]
}

export interface InventoryItemData {
    lecturer: string,
    variant: string,
    printNumber: number, // the global id number of the card
    instanceNumber: number // the number of this card that has been issued. If this is 1 it is an alpha card.
}

export interface UserData {
    inventory: InventoryItemData[],
    username: string
}

export interface Database {
    guildSettings: {[key: string]: GuildSettings},
    userData: {[key: string]: UserData}
}

// ============================== //

// === LOADING DATABASE === //
const runDir = path.join(path.resolve(), "run");

// create the run folder wherein everything is stored if not exists
if (!fs.existsSync(runDir)) {
    fs.mkdirSync(runDir);
}

// load the database
const databaseLocation = path.join(runDir, "database");

function loadDatabase(): Database {
    const database: Database = (() => {
        if (fs.existsSync(databaseLocation)) {
            return JSON.parse(fs.readFileSync(databaseLocation, 'utf8'));
        } else {
            return {
                guildSettings: {},
                userData: {},
                1
            };
        }
    })();
}


// ======================== //

export interface Serialisable<J> {
    toJSON: () => J;
}

export type Deserialiser<J, T extends Serialisable<J>> = (input: J) => T;

export function deserialise<J, T extends Serialisable<J>>(deserialiser: Deserialiser<J, T>, data: J): T {
    return deserialiser(data);
}