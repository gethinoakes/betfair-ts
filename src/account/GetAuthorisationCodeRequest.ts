/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export default class GetAuthorisationCodeRequest extends JsonRequest {
    private vendorId: string;

    constructor(
        vendorId: string = '',
    ) {
        super();
        this.vendorId = vendorId;
    }

    public fromJson(json: any): void {
        if ('vendorId' in json) {
            this.vendorId = json.vendorId;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.vendorId !== '') {
            json.vendorId = this.vendorId;
        }
        return json;
    }

    public isValid(): boolean {
        return this.vendorId !== '';
    }

    public getVendorId(): string {
        return this.vendorId;
    }
    public setVendorId(vendorId: string): void {
        this.vendorId = vendorId;
    }

}
