const ulList = document.querySelectorAll("ul.products__list");
const buttons = document.querySelectorAll("button.product__type--link");

buttons.forEach((element,index) => {
    element.addEventListener("click", () => {
        element.classList.add("product__type--link--active");
        ulList.forEach((ul,index) => {
            if(element.id === ul.id){
                ul.classList.add("products__list--active");
            }
            else{
                ul.classList.remove("products__list--active");
            }
        })
    });
});

// ulList.forEach((ul,index) => {
//     if(element.id === ul.id){
//         ul.classList.add("products__list--active");
//     }
//     else{
//         ul.classList.remove("products__list--active");
//     }
// })