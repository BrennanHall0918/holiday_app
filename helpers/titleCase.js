module.exports = function (str) {
    if(!str) return "";

    const keepLower = ["a","an", "and", "at", "the"]

    return str
        .toLowerCase()
        .split(" ")
        .map((word, i)=> {
            if (i !== 0 && keepLower.includes(word)) return word
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(" ")
}