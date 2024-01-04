// 왼쪽 썸네일 이미지 JS
//1. small_thumnail-a 마우스를 올리면 (ex)small2 마우스를 올렸다면
//2. big_thumnail-img(src) 값이 변경된다. (ex) big1이 big2 이미지 변경

const item_detail = document.querySelector('.item_detail');
const small_thum = item_detail.querySelectorAll('.small_thumnail a');
const big_thum = item_detail.querySelector('.big_thumnail img');
console.log(item_detail, small_thum, big_thum);

small_thum[0].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big1.jpg";
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big2.jpg";
})
small_thum[2].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big3.jpg";
})
small_thum[3].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big1.jpg";
})
small_thum[4].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big2.jpg";
})
small_thum[5].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big3.jpg";
})