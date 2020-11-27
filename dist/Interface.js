"use strict";
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 200,
    };
}
console.log(createSquare({ color: "pink" }));
