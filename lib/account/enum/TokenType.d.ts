/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class TokenType extends Enum {
    static BEARER: string;
    constructor(value?: string);
    setValue(value: string): void;
}
