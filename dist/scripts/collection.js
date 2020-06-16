const menu = document.querySelector(".nav-menu")
const menuButton = document.querySelector(".menu-button")

const holder = document.querySelector(".holder")


menuButton.addEventListener("click", function() {
    menu.classList.toggle("open")
    menuButton.classList.toggle("open")

})

holder.addEventListener("click", function() {
    menu.classList.remove("open")
    menuButton.classList.remove("open")


})




   

//     sections.forEach(section => {
//         if(section.offsetTop - 60 <= pixels) {
//             titleTag.innerHTML = section.getAttribute("data-client")

//             if(section.hasAttribute("data-s1")) {

//                 nav1.classList.add("selected")
//             } else {
//                 nav1.classList.remove("selected")
//             }

//             if(section.hasAttribute("data-s2")) {
//                 headerTag.classList.add("s2")
//                 nav2.classList.add("selected")
//             } else {
//             headerTag.classList.remove("s2")
//             nav2.classList.remove("selected")

//          }

//          if(section.hasAttribute("data-s3")) {
//             headerTag.classList.add("s3")
//             nav3.classList.add("selected")
//         } else {
//         headerTag.classList.remove("s3")
//         nav3.classList.remove("selected")

//      }

//      if(section.hasAttribute("data-s4")) {
//         headerTag.classList.add("s4")
//         nav4.classList.add("selected")

//     } else {
//     headerTag.classList.remove("s4")
//     nav4.classList.remove("selected")

//  }

//  if(section.hasAttribute("data-s5")) {
//     headerTag.classList.add("s5")
//     nav5.classList.add("selected")

// } else {
// headerTag.classList.remove("s5")
// nav5.classList.remove("selected")

// }

// if(section.hasAttribute("data-s6")) {
//     headerTag.classList.add("s6")
//     nav6.classList.add("selected")

// } else {
// headerTag.classList.remove("s6")
// nav6.classList.remove("selected")

// }
//         }
        
//     })
// })

// // when we scroll the page, see how far down the page we've scroolled 
// // then each section . check whether we've pass it and if we have..
// // then update the text in the header

