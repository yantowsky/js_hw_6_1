function delSimbol(string, simbols) {
    for (let simbol of simbols) {
        string = string.split(simbol).join('');
    };
    
    return console.log(string);
}

delSimbol('hello world', ['h','l','o']);