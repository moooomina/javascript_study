const bg = document.querySelectorAll('.bg')
const h2 = document.querySelectorAll('.bg h2')
const txt = document.querySelectorAll('.bg .p')
console.log(bg,h2,txt)

for(let i of bg){
    ScrollTrigger.create({
        trigger:i,
        onEnter:()=>i.classList.add('bg_scale')
    })
}

for(let i of h2){
    ScrollTrigger.create({
        trigger:i,
        onEnter:()=>i.classList.add('txt_top_opacity')
    })
}

for(let i of txt){
    ScrollTrigger.create({
        trigger:i,
        onEnter:()=>i.classList.add('txt_top_opacity')
    })
}

// ScrollTrigger.create({
//     trigger:'txt',
//     duration:1,
//     y:-10,
//     start:'0 30%',
//     markers:true,
//     onEnter:()=>txt
// })