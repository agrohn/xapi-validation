"use strict";
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.restrictToSchema({
    id: rulr_1.required(factory_1.stringValue),
    description: rulr_1.optional(factory_1.languageMap),
});
