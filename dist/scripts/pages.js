
let pageNumber = 0

// content for the pages
const titles = [
    { copy : "Olive Mahal Lehenga", background : "#FDE9CE", layout : "layoutOne" },
    { copy : "Siwai Feathered Gown", background : "#F2E9EB", layout : "layoutTwo" },
    { copy : "Jasmine Peplum Ensemble", background : "#F8EEE7", leftImage : "img/image-3.jpg", rightImage : "img/image-4.jpg"},
    { copy : "Candy Floss Gown", background : "#F4E3E7", leftImage : "img/image-3.jpg", rightImage : "img/image-4.jpg"},
    { copy : "Icy Roseate Peplum", background : "#D0D3E9", leftImage : "img/image-3.jpg", rightImage : "img/image-4.jpg"},
    { copy : "Aurora Mint", background : "#D1DEE0", leftImage : "img/image-3.jpg", rightImage : "img/image-4.jpg" },
    { copy : "Tinia Lily 3D Lehenga", background : "#F2E9EB", leftImage : "img/image-3.jpg", rightImage : "img/image-4.jpg" },
    { copy : "Timberland Peplum" , background : "#C0CDED"},
    { copy : "Azura", background : "#C4E0F4", leftImage : "img/image-3.jpg", rightImage : "img/image-4.jpg" },
    { copy : "Credit", background : "#F5F9FD" , leftImage : "img/image-3.jpg" }


]

let totalPages = 10

const holder = document.querySelector(".holder")



const layoutOne = document.querySelector(".look-grid-1")
const layoutTwo = document.querySelector(".look-grid-2")


const imageTwo = document.querySelector(".image-2 img")


const nextButton = document.querySelector(".next")
const prevButton = document.querySelector(".prev")
const titleTag = document.querySelector('.title')

const steps = document.querySelector('.steps')



    const next = function() {
        pageNumber = pageNumber + 1
    
        if (pageNumber > titles.length - 1 ) {
            pageNumber = 0
        }
        updateSection()
    
    }
    
    const previous = function() {
    
     pageNumber = pageNumber - 1
    
     if  (pageNumber < 0 ) {
         pageNumber = titles.length - 1
     }
     updateSection()
    
    }
    
    
    
    
    
    const updateSection = function() {
       
        if ( titles[pageNumber].layout = layoutOne ) {
            layoutOne.classList.remove('.hide');
         } else {
                layoutOne.classList.add('.hide');
            }
    

        titleTag.innerHTML = titles[pageNumber].copy
        holder.style.backgroundColor = titles[pageNumber].background
        steps.innerHTML =  pageNumber + 1 + ' / ' + totalPages
    
    }
    
    
    nextButton.addEventListener('click', function () {
    
        next() 
    
    })
    
    prevButton.addEventListener('click', function() {
        previous()
    })
    
    window.onload = function () {
        updateSection()
    }

