const pixelsTag = document.querySelector("div.pixels")
const sections = document.querySelectorAll("section")
const titleTag = document.querySelector(".collection-header h2")
const headerTag = document.querySelector(".collection-header")
const nav1 = document.querySelector(".p1")
const nav2 = document.querySelector(".p2")
const nav3 = document.querySelector(".p3")
const nav4 = document.querySelector(".p4")
const nav5 = document.querySelector(".p5")

document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset

   

    sections.forEach(section => {
        if(section.offsetTop - 60 <= pixels) {
            titleTag.innerHTML = section.getAttribute("data-client")

            if(section.hasAttribute("data-s1")) {
                nav1.classList.add("selected")
            } else {
                nav1.classList.remove("selected")
            }

            if(section.hasAttribute("data-s2")) {
                headerTag.classList.add("s2")
                nav2.classList.add("selected")
            } else {
            headerTag.classList.remove("s2")
            nav2.classList.remove("selected")

         }

         if(section.hasAttribute("data-s3")) {
            headerTag.classList.add("s3")
            nav3.classList.add("selected")
        } else {
        headerTag.classList.remove("s3")
        nav3.classList.remove("selected")

     }

     if(section.hasAttribute("data-s4")) {
        headerTag.classList.add("s4")
        nav4.classList.add("selected")

    } else {
    headerTag.classList.remove("s4")
    nav4.classList.remove("selected")

 }

 if(section.hasAttribute("data-s5")) {
    headerTag.classList.add("s5")
    nav5.classList.add("selected")

} else {
headerTag.classList.remove("s5")
nav5.classList.remove("selected")

}
        }
        
    })
})

// when we scroll the page, see how far down the page we've scroolled 
// then each section . check whether we've pass it and if we have..
// then update the text in the header

