//첫번째 자식, 마지막 자식 노드 잡기
//firstChild, firstElementChild
//lastChild, lastElementChild
const items = document.querySelectorAll('.item') //querySelector은 맨처음 인식하는 것만 인식해서 보여줌 꼭 all붙이기
console.log(items);
console.log(items[0]);
console.log(items[0].firstChild); //첫번째 자식 노드(공백포함)
console.log(items[0].firstElementChild); //첫번째 요소 노드 p.photo
console.log(items[0].lastChild); //마지막 자식 노드(공백)
console.log(items[0].lastElementChild); //마지막 자식 요소 p.price
//----------------------형제노드잡기
//이전 형제 previousSibling, previousElementSibling
//다음 형제 nextSibling, nextElementSibling
const item1_h2 = document.querySelector('h2')
console.log(item1_h2);
const item_h2 = items[0].querySelector('h2');
console.log(item_h2) //첫번째 item의 h2 상품 이름 정상확인
console.log(item_h2.nextSibling) //공백노드
console.log(item_h2.nextSibling.nextSibling) //공백포함 다음형제
console.log(item_h2.nextElementSibling) //요소만 체크하는 다음형제
console.log(item_h2.previousSibling) //공백노드
console.log(item_h2.previousSibling.previousSibling) //공백포함 이전형제
console.log(item_h2.previousElementSibling) //이전형제