function printNumbers(args) {
    let number = Number(args[0]);
    let i = 1;
    while(i <= number){
        console.log(i++);
    }
}
printNumbers(['2'])