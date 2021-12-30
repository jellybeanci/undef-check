"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undefCheck = void 0;
function undefCheck(value, message = "Error message not specified.") {
    if (value === void 0 || value === null)
        throw Error(message);
}
exports.undefCheck = undefCheck;
