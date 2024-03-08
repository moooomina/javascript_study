/* repository가 undefined인 경우 */
const object1 = {
    repository: undefined,
};

/* repository의 readme가 undefined인 경우 */
const object2 = {
    repository: {
        readme: undefined,
    },
};

/** repository.readme 모두가 존재하는 경우 */
const object3 = {
    repository: {
    readme: {
        extension: 'md',
        content: '금융을 쉽고 간편하게',
        }
    }
};

function safelyGet(object, path){
    let current = object;
    let properties = path.split('.'); //문자열에서 점을 기준으로 분할해서 배열에 넣어라.
    for(let i of properties){
        if(current === undefined){
            return undefined
        }else
        current = current[i] //순차적으로 보임
        console.log(i, current)
    }
    return console.log(current, properties)
}

safelyGet(object2, 'repository.readme.extension')