import JustValidate from 'just-validate';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// 
// swiper
// 

const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
let titleElement = document.createTextNode('スライド' + swiper.realIndex + 'を表示しています')

let titleContainer = document.getElementById('swiper-title');
titleContainer.appendChild(titleElement)

swiper.on('slideChange', function(){
    console.log('slide change')

    console.log(swiper.realIndex);

    titleElement.remove();
    
    titleElement = document.createTextNode('スライド' + swiper.realIndex + 'を表示しています。')
    titleContainer.appendChild(titleElement);
})

const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
const titles = [
    "highland cow",
    "Siamese cat",
    "titmouse"
];

let titleElement2 = document.createTextNode(titles[swiper2.realIndex])

let titleContainer2 = document.getElementById('swiper-title-2');
titleContainer2.appendChild(titleElement2);

swiper2.on('slideChange', function() {
    titleElement2.remove();

    titleElement2 = document.createTextNode(titles[swiper2.realIndex])
    titleContainer2.appendChild(titleElement2)
})

// 
// JustValidate
// 

const validator = new JustValidate('#basic_form');

validator
    .addField('#basic_name', [
        {
            rule: 'required',
            errorMessage: '必須入力項目です',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: '3文字以上で入力してください',
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: '15文字以内で入力してください',
        },
    
    ])
    .addField('#basic_email', [
        {
            rule: 'required',
            errorMessage: '必須入力項目です',
        },
        {
            rule: 'email',
            errorMessage: '有効な形式で入力してください（@マークを含む）',
        },
    ])
    .addField('#basic_password', [
        {
            rule: 'required',
            errorMessage: '必須入力項目です',
        },
        {
            rule: 'password',
            errorMessage: 'アルファベットと数字を含む8文字以上で入力してください',
        },
    ])
    .addField('#basic_age', [
        {
            rule: 'required',
            errorMessage: '必須入力項目です',
        },
        {
            rule: 'number',
            errorMessage: '有効な数字を入力してください',
        },
        {
            rule: 'minNumber',
            value: 18,
            errorMessage: '18以上の数字を入力してください',
        },
        {
            rule: 'maxNumber',
            value: 150,
            errorMessage: '150以下の数字を入力してください',
        },
    ])
    .addField('#basic_address', [
        {
            rule: 'required',
            errorMessage: '必須入力項目です',
        },
    ])
    .onSuccess((event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        console.log(formData.get("name"))
        console.log(formData.get("email"))
        console.log(formData.get("password"))
        console.log(formData.get("age"))
        console.log(formData.get("address"))
        // for (const [name, value] of formData.entries()) {
        //     console.log(`${name}: ${value}`);
        // }
    });