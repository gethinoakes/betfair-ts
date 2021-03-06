/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import ExposureLimit from '../sport/ExposureLimit';
import MarketGroup from '../sport/MarketGroup';
export default class SetExposureLimitForMarketGroupRequest extends JsonRequest {
    private marketGroup;
    private limit;
    constructor(marketGroup?: MarketGroup, limit?: ExposureLimit);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketGroup(): MarketGroup;
    setMarketGroup(marketGroup: MarketGroup): void;
    getLimit(): ExposureLimit;
    setLimit(limit: ExposureLimit): void;
}
