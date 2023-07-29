import { Deserialiser, Serialisable } from "./database/serialisation.js";

class Collectible implements Serialisable<> {    
    public constructor(
        private readonly name: string
    ) {

    }
    
    public toJSON() : any {
        return {
            
        }
    }

    public static nextPrintNumber: number;
    public static deserialiser: Deserialiser<Collectible> = input => {
        return new Collectible();
    };
}