/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import AffiliateRelationStatus from '../account/enum/AffiliateRelationStatus';

export default class AffiliateRelation extends JsonMember {
    private vendorClientId: string;
    private status: AffiliateRelationStatus;

    constructor(
        vendorClientId: string = '',
        status: AffiliateRelationStatus = new AffiliateRelationStatus(),
    ) {
        super();
        this.vendorClientId = vendorClientId;
        this.status = status;
    }

    public fromJson(json: any): void {
        if ('vendorClientId' in json) {
            this.vendorClientId = json.vendorClientId;
        }
        if ('status' in json) {
            this.status.setValue(json.status);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.vendorClientId !== '') {
            json.vendorClientId = this.vendorClientId;
        }
        if (this.status.isValid()) {
            json.status = this.status.getValue();
        }
        return json;
    }

    public isValid(): boolean {
        return this.vendorClientId !== '' &&
            this.status.isValid();
    }

    public getVendorClientId(): string {
        return this.vendorClientId;
    }
    public setVendorClientId(vendorClientId: string): void {
        this.vendorClientId = vendorClientId;
    }
    public getStatus(): AffiliateRelationStatus {
        return this.status;
    }
    public setStatus(status: AffiliateRelationStatus): void {
        this.status = status;
    }

}
