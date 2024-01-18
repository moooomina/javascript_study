const target = document.querySelector('.target')
const ul = document.createElement('ul') //태그 생성
let li = document.createElement('li')
console.log(target,ul,li)

//target-ul-<l>-span상품span*2-</l
for(let i=0; i<3; i++){
    li = document.createElement('li') //생성
    for(let j=0; j<2; j++){
        li.innerHTML += `<span>상품${j+1}<span>`
    }
    ul.appendChild(li) //만들어진 li가 ul가 들어가야하므로 for문 안에 적어줘야한다.
}
target.appendChild(ul)

const target2 = document.querySelector('.target2')
let dt = document.createElement('dt')
let dd = document.createElement('dd')

//dt-dd-dd만들기
dt.innerHTML = `정의형 제목`
target2.appendChild(dt)
for(let m=0; m<2; m++){
    dd = document.createElement('dd')
    dd.innerHTML = `정의형 내용${m+1}`
    target2.appendChild(dd)
}

//dt-dd-dd-dt-dd-dd만들기
for(let i=0; i<2; i++){
    //dt1
    dt = document.createElement('dt')
    dt.innerHTML = `정의형 제목${i+1}`
    target2.appendChild(dt)
    for(let m=0; m<2; m++){
        //dd2
        dd = document.createElement('dd')
        dd.innerHTML = `정의형 내용${m+1}`
        target2.appendChild(dd)
    }
}