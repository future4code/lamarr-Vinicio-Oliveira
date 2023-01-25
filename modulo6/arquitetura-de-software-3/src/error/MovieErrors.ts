import { CustomError } from "./CustomError";

export class InvalidDuration extends CustomError {
    constructor(){
        super(400, "Duração muito curta")
    }
}

