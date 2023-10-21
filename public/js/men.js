
let services = document.getElementsByClassName('service')

for (let i = 0; i < services.length; i++) {
    let currentService = services[i]

    console.log(currentService)
    
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

menuBtn.addEventListener('click', (e) => {
    let clickedBtn = e.target
    clickedBtn.style.display = 'none'
    menuCancelBtn.style.display = 'block'
})

menuCancelBtn.addEventListener('click', (e) => {
    let cancelBtnclicked = e.target
    cancelBtnclicked.style.display = 'none'
    menuBtn.style.display = 'block'
})
    