"use strict";
// sessionStorage.setItem("name","Nurane ")
// sessionStorage.setItem("surname","Ismayilzade")

// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.getItem("surname"));

// sessionStorage.clear()
// sessionStorage.removeItem("surname")


// localStorage.setItem("name","Nurana")

// let inputKey=document.querySelector(".input-key")
// let inputValue=document.querySelector(".input-value")
// let addBtn=document.querySelector("button")

// addBtn.addEventListener("click",function(){
//     let key=inputKey.value;
//     let value=inputValue.value;
//     localStorage.setItem(key,value)
//     // console.log(key+" "+value);
//     inputKey.value="";
//     inputValue.value="";
// })

// let datas=["Nurane","Nunu","Nurka","Nurus"]
// localStorage.setItem("datas",datas)

// let jsonData={
//     name:"nunu",
//     surname:"ismayilzade",
//     phones:[
//         3456,3332
//     ],
//     group:[
//         {
//             name:"P418",
//             capacity:40,
//             teachers:[
//                 "Cavid",
//                 "Emil"
//             ]
//         }
//     ]
// }
// console.log(jsonData.group[0].capacity);
// for (const item of jsonData.group[0].teachers) {
//     console.log(item);
// }

// let datas=["Nurane","Nunu","Nurka","Nurus"]
// localStorage.setItem("datas",JSON.stringify(datas))
// console.log(localStorage.getItem("datas"));
// console.log(JSON.parse(localStorage.getItem("datas")));

// let datas=[
//     {
//         name:"Hp",
//         surname:"Corei7"
//     },
//     {
//         name:"Computer",
//         surname:"Ehm"
//     }
// ]

// localStorage.setItem("datas",datas)
// console.log(localStorage.getItem("datas",datas));

// localStorage.setItem("datas",JSON.stringify(datas))

// console.log(JSON.parse(localStorage.getItem("datas")));

let basket=[];
if (JSON.parse(localStorage.getItem("basket"))==null) {
    localStorage.setItem("basket",JSON.stringify(basket))
}
else{
    basket=JSON.parse(localStorage.getItem("basket"))
}
let addBtns=document.querySelectorAll("#products .add-btn")

addBtns.forEach(btn => {
    btn.addEventListener("click",function(e){
        e.preventDefault();
        let productId=parseInt(this.parentNode.parentNode.getAttribute("data-id"))
        let productName=this.parentNode.firstElementChild.innerText
        let productDescription=this.parentNode.lastElementChild.innerText
        let productImage=this.parentNode.previousElementSibling.getAttribute("src")
        basket.push({
            id:productId,
            name:productName,
            description:productDescription,
            image:productImage,
            count:1
        })
        console.log(basket);
    })
});
