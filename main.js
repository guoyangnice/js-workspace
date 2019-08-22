// function createMultiplyTable(start, end) {
//     if (isValid(start, end)) {
//         let result = ""
//         for (var i = start; i <= end; i++) {
//             var arr = "";
//             for (var j = start; j <= i; j++) {
//                 arr += (j + "*" + i + "=" + j * i + " ");
//             }
//             result += (arr + "\n");
//         }
//     }
//     return result;
// }

function createMutiplyTable1(start, end){
    if(isValid(start,end)){
        return getLine(start,end);
    }
    return null;
}

//检验合法性
function isValid(start, end) {
    if (Number.isInteger(start) && Number.isInteger(end)) {
        if (start < 1001 && end < 1001) {
            if (start <= end) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//得到每一行,并拼接
function getLine(start,end) {
    let result = "";
    for(let i = start; i <= end ;i++){
        const seperate = start === end ? "" : "\n";
        result += getItem(i,end)+seperate;
    }
    return result;
}

//得到每个条目
function getItem(start, end) {
    let result = "";
    for (let i = start; i <= end; i++) {
        const seperate = start === end ? "" : "\t";
        result += getEveryResult(start,i) + seperate;
    }
    return result;
}

//计算每个结果
function getEveryResult(first,second){
    return `${first} * ${second} = ${first*second}`;
}

module.exports = createMutiplyTable1;
