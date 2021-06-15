import { HttpException, HttpStatus } from "@nestjs/common";

export class NameAlreadyExistsException extends HttpException {
    constructor(){
        super("A user with that username already exists.", HttpStatus.BAD_REQUEST)
    }
}