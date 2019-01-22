function removeAdd(args){

    let arr = [];
    for(let obj of args){
        let input = obj.split(' ');

        let command = input[0];

        switch(command){
            case "add":
                arr.push(input[1]);
                break;
            case "remove":
                let index = Number(input[1]);
                arr.splice(index, 1);
                break;

        }
    }
    console.log(arr.join('\n'));
}
removeAdd([
    'add 3', 'add 5', 'remove 1', 'add 7'
])