"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketVersion_1 = require("../sport/MarketVersion");
const ReplaceInstruction_1 = require("../sport/ReplaceInstruction");
class ReplaceOrdersRequest extends JsonRequest_1.default {
    constructor(marketId = '', instructions = [], customerRef = '', marketVersion = new MarketVersion_1.default(), async = null) {
        super();
        this.marketId = marketId;
        this.instructions = instructions;
        this.customerRef = customerRef;
        this.marketVersion = marketVersion;
        this.async = async;
    }
    fromJson(json) {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('instructions' in json) {
            this.instructions = json.instructions.map((instructionsJson) => {
                const element = new ReplaceInstruction_1.default();
                element.fromJson(instructionsJson);
                return element;
            });
        }
        if ('customerRef' in json) {
            this.customerRef = json.customerRef;
        }
        if ('marketVersion' in json) {
            this.marketVersion.fromJson(json.marketVersion);
        }
        if ('async' in json) {
            this.async = json.async;
        }
    }
    toJson() {
        const json = {};
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.instructions.length > 0) {
            json.instructions = this.instructions.map((value) => value.toJson());
        }
        if (this.customerRef !== null) {
            json.customerRef = this.customerRef;
        }
        if (this.marketVersion.isValid()) {
            json.marketVersion = this.marketVersion.toJson();
        }
        if (this.async !== null) {
            json.async = this.async;
        }
        return json;
    }
    isValid() {
        return this.marketId !== null &&
            this.instructions.length > 0;
    }
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    getInstructions() {
        return this.instructions;
    }
    setInstructions(instructions) {
        this.instructions = instructions;
    }
    getCustomerRef() {
        return this.customerRef;
    }
    setCustomerRef(customerRef) {
        this.customerRef = customerRef;
    }
    getMarketVersion() {
        return this.marketVersion;
    }
    setMarketVersion(marketVersion) {
        this.marketVersion = marketVersion;
    }
    getAsync() {
        return this.async;
    }
    setAsync(async) {
        this.async = async;
    }
}
exports.default = ReplaceOrdersRequest;
//# sourceMappingURL=ReplaceOrdersRequest.js.map