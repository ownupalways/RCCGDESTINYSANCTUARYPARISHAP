
let services = document.getElementsByClassName('service')

for (let i = 0; i < services.length; i++) {
    let currentService = services[i]
    
    currentService.addEventListener('click', (event)=> {
        let  serviceBtn = event.target
        serviceBtn.nextElementSibling.style.display = "flex"
    })

}


let closePanel = document.getElementsByClassName('close-panel')


for (let i = 0; i < closePanel.length; i++) {
    const currentClosePanel = closePanel[i];
    
    currentClosePanel.addEventListener('click', (event)=> {
        let closeBtn = event.target
        closeBtn.parentElement.parentElement.style.display = "none"
    })
}

let modalPanel = document.getElementsByClassName('panel')

function closeWindow(event) {
    if (event.target == modalPanel) 
    {
        modalPanel.style.display = "none"
    }
}


// TESTIMONY PAGE ---------------
// const testimonyMessage = document.querySelector('.testimonyMessage')
// console.log(testimonyMessage)

// var postBtn = document.querySelector('.postBtn')
// console.log(postBtn)

// testimonyMessage.addEventListener('focus', () => {
//     postBtn.style.display = "flex"
// })


// const PointInDelete = document.querySelector('#PointInDelete')

// PointInDelete.addEventListener('click', () => {
//     const tMessage = document.querySelector('.testimonyMessage')
//     tMessage.value =''

//     removeBtns();
// })

// function removeBtns() {
//     postBtn.style.display = "none"
// }

// ADDING NEW TESTIMONY BOX--------
// let TestimonyBtn = document.querySelector('.TestimonyBtn')
// console.log(TestimonyBtn)

// TestimonyBtn.addEventListener('click', function() {
//     testimonyBox()
// })

// function testimonyBox() {
//     const newTestimony = document.createElement('div')
//     newTestimony.classList.add('PointIn')
//     const PointIn = document.querySelector('.PointIn')
//     const PointInContent = `
//     <form class="testimony-message" style="background-color:black;">
//         <h2><i>Let Somebody Shout Halleluyah!</i></h2>
//         <textarea class="testimonyMessage" name="Comment" placeholder="Testify Here" id="testify" cols="28" rows="5"></textarea>
//         <div class="postBtn">
//             <input type="button" id="PointInDelete" value="Delete">
//             <input type="button" id="PointInPost" value="Testify">
//         </div>
//     </form>`
//     newTestimony.innerHTML = PointInContent
//     PointIn.appendChild(newTestimony)
// }

// CONTACT INTERACTION FOR EMAIL SENDING
$('form').on('submit', (e) => {
    e.preventDefault()

        const email = $('#email').val().trim()
        const subject = $('#subject').val().trim()
        const text = $('#text').val().trim()

        const data = {
            email,
            subject,
            text
        }

        $.post('/email', data, () => {
            console.log('Server received Our data')
        })
    })

// MEDIA QUERY MENU CARD/ SIDEBAR MENU
let menuBtn = document.querySelector('#btn')
let menuCancelBtn = document.querySelector('#cancel')
let headerCard = document.querySelector('.headerBar')

menuBtn.addEventListener('click', (e) => {
    let clickedBtn = e.target
    clickedBtn.style.display = 'none'
    headerCard.style.left = '0px'
    menuCancelBtn.style.display = 'block'
})

menuCancelBtn.addEventListener('click', (e) => {
    let cancelBtnclicked = e.target
    cancelBtnclicked.style.display = 'none'
    headerCard.style.left = '-720px'
    menuBtn.style.display = 'block'
})

// GALLERY OPERATIONS HERE
// GALLERY SWITCH
// console.log(videoCardBtn)
let photoBoxDisplay = document.querySelector('.photoShop')
let videoBoxDisplay =  document.querySelector('.video-gallery')


function photoCard() {
    videoBoxDisplay.style.display = "none"
    photoBoxDisplay.style.display = "block"
}

function videoCard() {
    photoBoxDisplay.style.display = "none"
    videoBoxDisplay.style.display = "block"
}

// PHOTO GALLERY INTERRACTION
let photoShopAll = document.querySelector('.photoShop')
function imageBtn(theImage) {
    let toBeExpandedImage = document.getElementById('expandedImg')
    let imageText = document.getElementById('img-text')
    toBeExpandedImage.src = theImage.src

    imageText.innerHTML = theImage.alt
   
    toBeExpandedImage.parentElement.style.display = "block"
    photoShopAll.style.paddingTop =  "8rem"
    toBeExpandedImage.parentElement.style.transition = "2s all"

    scrollBtn()
}

let PhotoDisplayContainerCloseBtn = document.querySelector('.close-btn')

PhotoDisplayContainerCloseBtn.addEventListener('click', (e)=> {
 let btnClicked = e.target
 btnClicked.parentElement.style.display = "none"
 photoShopAll.style.paddingTop =  "18rem"
 separateGalleryBtns.style.paddingTop = "7rem"
})


// APPEARANCE BETWEEN GALLERY BUTTONS AND PHOTO DISPLAY CONTAINER

let PhotoDisplayContainer = document.querySelector('.photo-display-container')

// console.log(PhotoDisplayContainer)
let photoGalleryDisplay = document.querySelectorAll('.photo-gallery-display .photo-card')
console.log(photoGalleryDisplay)

let separateGalleryBtns = document.querySelector('.separate-galleryBtn')
// console.log(separateGalleryBtns)

photoGalleryDisplay.forEach(photoCard => {
    photoCard.addEventListener('click', () => {
        separateGalleryBtns.style.paddingTop = "0rem"
    })
})
// wWINDOW SCROLL FOR PHOTO
let imageScrollBtnToTopView = document.querySelectorAll('.photo-gallery-display .photo-card')



function scrollBtn() {

    for (let i = 0; i < imageScrollBtnToTopView.length; i++) {
        const currentImage = imageScrollBtnToTopView[i];
    
        currentImage.addEventListener('click', () => {
           if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.body.scrollTop ="0";
        
               document.documentElement.scrollTop = "0"
    
            //    document.documentElement.style.transition = "2s all"
            } else {
                document.body.scrollTop ="0";
        
                document.documentElement.scrollTop = "0"
            }
        })
    }
}

// window.onscroll = function() {

//     scrollBtn()
// }



// VIDEO GALLRY INTERRACTION 
let videoPlayList = document.querySelectorAll('.video-playList .current-video')

// var currentVideo = document.querySelectorAll('.current-video')

let mainVideoDisplay = document.querySelector('.main-video-display video')
let title = document.querySelector('.main-video-display .tag')

videoPlayList.forEach(video => {
    video.onclick = () => {
        videoPlayList.forEach(currentVideo => currentVideo.classList.remove('active'))
        video.classList.add('active')
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src')
            mainVideoDisplay.src = src

            let text = video.children[1].innerHTML
            title.innerHTML = text
        }
    }
})

// TESTIMONY COMING SOON TIMER

// Set the date we're counting down to
let countDownDate = new Date("Jan 31, 2024 15:37:25").getTime();

// Update the count down every 1 second
let countdownfunction = setInterval(function() {

  // Get todays date and time
  let now = new Date().getTime();
  
  // Find the distance between now an the count down date
  let distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("timeOut").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("timeOut").innerHTML = "EXPIRED";
  }
}, 1000);

