//조건문 if(조건식){조건식 참 실행결과}else{조건식 거짓 실행결과}
// const qa = prompt('이동 방향을 입력하세요','왼쪽, 오른쪽, 가운데 중 하나로 입력')
// //논리연산자(&&(and), ||(or), !(not)) 활용 조건식 단축하기
// //비교 && 비교 = 둘 다 참이어야 참 결과
// //비교 || 비교 = 둘 중 하나만 참이어도 참 결과
// if(qa=='왼쪽' || qa=='가운데' || qa=='오른쪽'){
//     alert(`${qa} 1칸 이동`)
// }else{
//     alert('잘못 입력하셨습니다.')
// }

//if ~ else if ~ else 다양한 조건식으로 구분하기
/* if(qa == '왼쪽'){
    alert('왼쪽으로 한칸 이동')
}else if(qa == '오른쪽'){
    alert('오른쪽으로 한칸 이동')
}else if(qa == '가운데'){
    alert('가운데로 한칸 이동')
}else{
    alert('정확하게 입력해 주세요')
} */

// //케찹, 머스터드, 설탕 소스 중 하나 선택
// const sauce = prompt('원하는 소스를 입력하세요','케찹, 머스터드, 설탕 중 택1')
// //논리연산자로 변경
// if(sauce=='케찹' || sauce=='머스터드' || sauce=='설탕'){
//     alert(`${sauce} 선택`)
// }else{
//     alert('소스 선택 안하셨습니다.')
// }

// if(sauce == '케찹'){
//     alert('케찹 선택하셨습니다.')
// }else if(sauce == '머스터드'){
//     alert('머스터드 선택하셨습니다.')
// }else if(sauce == '설탕'){
//     alert('설탕 선택하셨습니다.')
// }else{
//     alert('소스 선택 안하셨습니다.')
// }

//-----------------------------
///100~90 a
//89~80 B
//79~70 c
//69~60 D
//59~ F

/* const score = prompt('시험점수를 입력하세요','0~100점 사이값')
let score_result = ''
//if 조건 안에 if를 추가 작성하는 경우 -> 중첩if문(조건에서 추가조건이 더 필요한 경우)
//0~100 참 조건으로 만든 후 그 사이 50점수를 알고 싶을 때
if(score >= 0 && score < 101){//0~100 조건
    if(score>=90){
        score_result = 'A'
    }else if(score>=80){
        score_result = 'B'
    }else if(score>=70){
        score_result = 'C'
    }else if(score>=60){
        score_result = 'D'
    }else{
        score_result = 'F'
    }
    alert(`당신의 학점은 ${score_result}학점입니다.`)
}else{
    alert('잘못 입력하셨습니다.')
} */

// if(100 >= score && score >= 90){
//     alert(`${score}점은 학점 A입니다.`)
// }else if(100 > score && score >= 80){
//     alert(`${score}점은 학점 B입니다.`)
// }else if(100 > score && score >= 70){
//     alert(`${score}점은 학점 C입니다.`)
// }else if(100 > score && score >= 60){
//     alert(`${score}점은 학점 D입니다.`)
// }else if(100 > score && score < 59){
//     alert(`${score}점은 학점 F입니다.`)
// }else{
//     alert('올바르게 입력해주세요.')
// }

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 고결, 신비',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'데이지',
        content:'순진, 인내, 평화, 희망',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움',
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함',
    },{
        month:6,
        flower:'백합',
        content:'순결',
    },{
        month:7,
        flower:'수련',
        content:'청순한 마음',
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함',
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑',
    },{
        month:10,
        flower:'메리골드',
        content:'우정, 예언',
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실, 감사',
    },{
        month:12,
        flower:'포인세티아',
        content:'축복, 추억, 행복',
    }
]
//Q.당신의 생일은 몇월인가요?
//ex) 12월이라고 작성했다면?
//12월의 탄생화는 포인세티아이고 꽃말은 축복, 추억, 행복입니다.

const birthday_month = Number(prompt('당신의 생일은 몇월인가요?','1~12월 중 입력하세요.'))
let birthday_message = '' //최종 결과 값 변수
let user_birthday = '' //중첩 if문에서 사용자가 입력한 달과 탄생화 배열객체를 연결해주는 전역변수
if(0 < birthday_month && birthday_month < 13){ //1~12 조건
    //위 조건이 참일 때 추가 세부조건을 만들어주는 중첩if문 위치
    if(birthday_month == 1||2||3||4||5||6||7||8||9||10||11||12){
        user_birthday = birthday_flower[birthday_month-1]
    }
    // if(birthday_month == 1){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 2){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 3){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 4){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 5){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 6){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 7){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 8){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 9){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 10){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 11){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }else if(birthday_month == 12){
    //     user_birthday = birthday_flower[birthday_month-1]
    // }
    birthday_message = `${user_birthday.month}월의 탄생화는 ${user_birthday.flower}이고 꽃말은 ${user_birthday.content}입니다.`
    // birthday_message = `${}월의 탄생화는 ${}이고 꽃말은 ${}입니다.`
    alert(birthday_message)
}else{ //1~12가 아닌 다른 숫자를 입력했을 때
    alert('잘못 입력하셨습니다. 1~12월 중 하나를 입력하세요.')
}
