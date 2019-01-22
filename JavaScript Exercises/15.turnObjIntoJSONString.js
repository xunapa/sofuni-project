function turnObjIntoJSONString(args){
    let studentInfo = {};

    for(let obj of args) {
        let input = obj.split(" -> ");

        let key = input[0];

        let value = isFinite(input[1]) ? Number(input[1]) : input[1];
        studentInfo[key] = value;
    }

    console.log(JSON.stringify(studentInfo));
}
turnObjIntoJSONString([
    'name -&gt; Angel',
    'surname -&gt; Georgiev',
    'age -&gt; 20',
    'grade -&gt; 6.00',
    'date -&gt; 23/05/1995',
    'town -&gt; Sofia'
])