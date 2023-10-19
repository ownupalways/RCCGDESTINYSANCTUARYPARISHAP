// Tab toggling open and close

    // $(function() {
    //     $(".tog0").click(function(){
    //         $(".sunday").slideToggle(500);
    //     });
    // });
    // $(function() {
    //     $(".close-sunday").click(function(){
    //         $(".sunday").hide(500);
    //     });
    // });   

    // $(function() {
    //     $(".tog2").click(function(){
    //         $(".payment").slideToggle(500);
    //     });
    // });
    // $(function() {
    //     $(".close-payment").click(function(){
    //         $(".payment").hide(500);
    //     });
    // });
    
    //     $(function() {
    //     $(".tog3").click(function(){
    //         $(".region").slideToggle(500);
    //     });
    // });
    // $(function() {
    //     $(".close-region").click(function(){
    //         $(".region").hide(500);
    //     });
    // });  

    // $(function() {
    //     $(".tog6").click(function(){
    //         $(".parish").slideToggle(500);
    //     });
    // });
    // $(function() {
    //     $(".close-parish").click(function(){
    //         $(".parish").hide(500);
    //     });
    // });



    // Navigation Menu operation

    // function OpenCard (event, ServiceName){
    //       Pot();
    //     var navTabLinks = document.getElementsByClassName('navTabLinks')

    //     for (let i = 0; i < navTabLinks.length; i++) {
    //         navTabLinks[i].className = navTabLinks[i].className.replace(" active", " ")
    //     }

    //     var currentCard = document.getElementById(ServiceName)

    //     currentCard.style.display = "block"

    //     event.currentTarget.className += " active";
    // }

    // function Pot() {

    //     var i, navTabContent, navTabLinks;

    //     var navTabContent = document.getElementsByClassName('navTabContent')

    //     for (let i = 0; i < navTabContent.length; i++) {
    //         const TabContent = navTabContent[i];

    //         TabContent.style.display = "none"
    //     }
    // }

        
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
const testimonyMessage = document.querySelector('.testimonyMessage')
console.log(testimonyMessage)

var postBtn = document.querySelector('.postBtn')
console.log(postBtn)

testimonyMessage.addEventListener('focus', () => {
    postBtn.style.display = "flex"
})


const PointInDelete = document.querySelector('#PointInDelete')

PointInDelete.addEventListener('click', () => {
    const tMessage = document.querySelector('.testimonyMessage')
    tMessage.value =''

    removeBtns();
})

function removeBtns() {
    postBtn.style.display = "none"
}

// ADDING NEW TESTIMONY BOX--------
let TestimonyBtn = document.querySelector('.TestimonyBtn')
console.log(TestimonyBtn)

TestimonyBtn.addEventListener('click', function() {
    testimonyBox()
})

function testimonyBox() {
    const newTestimony = document.createElement('div')
    newTestimony.classList.add('PointIn')
    const PointIn = document.querySelector('.PointIn')
    const PointInContent = `
    <form class="testimony-message" style="background-color:black;">
        <h2><i>Let Somebody Shout Halleluyah!</i></h2>
        <textarea class="testimonyMessage" name="Comment" placeholder="Testify Here" id="testify" cols="28" rows="5"></textarea>
        <div class="postBtn">
            <input type="button" id="PointInDelete" value="Delete">
            <input type="button" id="PointInPost" value="Testify">
        </div>
    </form>`
    newTestimony.innerHTML = PointInContent
    PointIn.appendChild(newTestimony)
}