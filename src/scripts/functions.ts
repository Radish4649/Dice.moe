import "./interfaces.ts"

// takes a Roll object and returns another object with the results of a calculation
function calculateRoll(roll: Roll) {
    var [quan, size, adder] = [roll.values.quan, roll.values.size, roll.values.mod];
    var list = [];
    for (let i = 0; i < quan; i++) {
        let r = Math.floor(Math.random()*size)+1;
        list.push(r);
    }
    var result: Result = {
            title: roll.title,
            list: list,
            total: list.reduce((x,y)=>x+y) + adder,
            text: getText(roll),
            quan: quan,
            size: size,
            adder: adder,
    }
    return result
}

function formatCalc(results: Result) {
    var lineOne = `Rolling ${results.text} (${results.title}): `
    var lineTwo = `${results.list}`
    var lineThree = `Total: ${results.total} | Average: ${results.total / results.quan}`
    var lineFour = "------------"
    return [lineOne, lineTwo, lineThree, lineFour].join("\n")
}

// takes a Roll object and returns the text representation of that roll (e.g. 3d6+4)
function getText(roll: Roll) {
    var [quan, size, adder] = [roll.values.quan, roll.values.size, roll.values.mod];
    var textInitial = `${quan}D${size}`
    var textFinal = adder > 0 ? `+${adder}` : adder == 0 ? "" : `${adder}`
    return textInitial + textFinal
}