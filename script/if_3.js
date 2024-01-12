const userId = document.querySelector('#userId')
console.log(userId)

userId.addEventListener('blur',()=>{
    //조건 : id가 admin이면 관리자환영, 아니면 일반회원환영
    if(userId.value == 'admin'){
        console.log('관리자환영')
    }else{
        console.log('일반회원환영')
    }
})