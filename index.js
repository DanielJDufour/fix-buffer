module.exports = function fixBuffer(inpt) {
    if (
        typeof Buffer !== "undefined" &&
        typeof inpt === "object" &&
        (
            (typeof inpt.constructor === "object" && inpt.constructor.name === "Buffer") ||
            (inpt.type == "Buffer" && Array.isArray(inpt.data) && Object.keys(inpt).length == 2)
        ) &&
        Buffer.isBuffer(inpt) === false
    ) {
        inpt = Buffer.from(inpt);
    }

    return inpt;
}
