declare var require: any
import {JwtBuilder,algorithm} from "jwt-builder";
import { Injectable } from '@angular/core';
@Injectable()
export class JwtMaker {
    constructor() {

    }

    //Denna metod returnerar headern som används i spiProvider för att autenticera
    //Strängen den tar emot är bara ifall vi vill kunna skicka någon form av payload till apit, vilket vi kanske inte vill
    makeToken(userVal:string):string{
'use strict'
const jwtBuilder = require( 'jwt-builder' );
let token = jwtBuilder( {
              algorithm: 'HS256',
              secret: 'f77096c391615b4cd2d9f6586a104eb60050888f119625cc50598ca44285391c',
              iss: 'ionic-app',
              user_value: userVal,
                headers: {
                  kid: '2016-11-17'
              }
          });
              return token;
            }
}
