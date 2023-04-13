//a를 누르면 img의 src가 바뀌는 구조, jpg, png 통합시키고 이름도 통합시키고 숫자만 다르게 만들기 인텍스로 처리할 것이기 때문에 숫자도 통일성없이 만들면 안 됨
//주문영역 상품 이미지 view (작은 이미지 클릭 시 큰 이미지로 변경)

const big = document.querySelector('#order .big img')
const thum = document.querySelectorAll('#order .thum a')
console.log(big,thum)

thum.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//href 새로고침 기능 막기
        console.log(target)
        console.log(index)
        big.src =`./images/product_0${index+1}.jpg` /* ++는 안됨 */
    })
})

//주문영역 상품 옵션 선택

const brands = document.querySelector('#order #brands')
const galaxy = document.querySelector('#order #galaxy')
const iphone = document.querySelector('#order #iphone')
console.log(brands, galaxy, iphone)
iphone.style.display='none' //아이폰 숨기기(초기값)
galaxy.disabled = true //비활성화(초기값) - false(활성화)

brands.addEventListener('change',()=>{
    if(brands.options[2].selected == true){//아이폰
        /* console.log(true) */
        brands_dis(iphone, false)
    }
    else if(brands.options[1].selected == true){//갤럭시
        brands_dis(galaxy, false)
    }
    else{//필수옵션안내(위 조건 아이폰, 갤력시가 모두 아닌 경우)
        brands_dis(galaxy, true)
        galaxy.options[0].selected = true
    }
})
function brands_dis(target, boolean){
    galaxy.style.display = 'none'
    iphone.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean
}

//기종 선택 시 주문영역에 기종명 출력하기

const order_model = document.querySelector('.order_product .model')
const galaxy_op = document.querySelectorAll('#galaxy option')
const iphone_op = document.querySelectorAll('#iphone option')
console.log(order_model, galaxy_op, iphone_op)

//갤럭시 기종 출력

galaxy.addEventListener('change', ()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_index)
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index])/* 선택한 객체에 마지막 자식을 삽입해라 */
})

//아이폰 기종 출력
iphone.addEventListener('change', ()=>{
    let iphone_index = iphone.selectedIndex
    console.log(iphone_index)
    console.log(iphone_op[iphone_index])
    order_model.appendChild(iphone_op[iphone_index])/* 선택한 객체에 마지막 자식을 삽입해라 */
})

//number 증가
/* const num = document.querySelector('#order_num')
let price = document.querySelector('.order_list em span')
num.addEventListener('change', ()=>{
    price.innerHTML = Number(num.value*17000).toLocaleString('ko-kr')
}) */
const num_input = document.querySelector('#order_num')
const total_price = document.querySelector('.total_price')
let price = 17000
let total

num_input.addEventListener('change',()=>{
    if(num_input.value>0){
        console.log(num_input.value)
        total = price*num_input.value
        console.log(total)
        total_price.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('최소 주문 수량입니다.')
        num_input.value = 1
    }
})

const cancel = document.querySelector('#cancel')
cancel.addEventListener('click', ()=>{
    num_input.value = 1
    total = price*num_input.value
    total_price.innerHTML = total.toLocaleString('ko-kr')
})