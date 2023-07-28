// todo: this file handles deserialising and deserialising for read/write to the actual database file
// converting between useful class objects used in the live runtime database and the stored JSON data
export interface Serialisable {
    toJSON: () => any;
}

export function registerSerialisable<T extends Serialisable>(deserialiser: (input: any) => T): void {

}