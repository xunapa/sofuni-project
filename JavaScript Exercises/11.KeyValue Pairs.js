function workingKeyValuePairs(args) {
    let key = args.pop();

    let keyValue = {};

    for(let obj of args) {
        let input = obj.split(" ");
        let key = input[0];
        let value = input[1];

        keyValue[key] = value;
    }
    console.log(keyValue.hasOwnProperty(key) ? keyValue[key] : "None");
}