// start animation width 
 let section =document.querySelector(".SKILLS");
 let spans = document.querySelectorAll(".box span")

 window.onscroll = function() {
     if(window.scrollY >= section.offsetTop) {
      console.log("hi")
      spans.forEach((span) => {
          span.style.width = span.dataset.width
      })
     }
 }
 console.log(section)
 // end animation width 
// start input email
let input = document.querySelector("form .email")
input.onfocus =function () {
    if (this.placeholder === "Enter your Email") {
       this.placeholder = ""
    }
}
input.onblur =function () {
    if (this.placeholder === "") {
       this.placeholder = "Enter your Email"
    }
}
console.log(input)
// end input email
// start counter 
let contdown = new Date ("Dec 31 ,2021 23: 59: 59").getTime()
setInterval (()=> {
let datenow = new Date().getTime()

let timediff = contdown -  datenow

let days = Math.floor(timediff / (1000*60*60*24))

let hours = Math.floor(timediff % (1000*60*60*24) / (1000*60*60))
let mint = Math.floor(timediff % (1000*60*60) / (1000*60))
let second = Math.floor(timediff % (1000*60) / 1000)

document.querySelector(".days").innerHTML= days
document.querySelector(".hour").innerHTML= hours
document.querySelector(".minuts").innerHTML= mint
document.querySelector(".second").innerHTML= second

},1000)
// end counter 
// start stats 
let sectionstat = document.querySelector(".Stats")
let nums = document.querySelectorAll("#num")

// for(let i = 0; i <= nums.length; i++ ) {
//     nums++
// }



function start(el) {
   let goles = el.dataset.goole 
//    console.log(nums)

  let cont =  setInterval(() => {

    el.textContent ++
    if (el.textContent === goles) {
        clearInterval(cont)
    }
   }, 10)
}
start(nums[0])
start(nums[1])
start(nums[2])
start(nums[3])

// end stats 

// start Request 
let disc1 = document.querySelector(".Discount #name1")
let disc2 = document.querySelector(".Discount #name2")
let disc3 = document.querySelector(".Discount #name3")

disc1.onfocus =function() {
    if (this.placeholder === "Your Name" ) {
       this.placeholder = ""
    }
}
disc1.onblur =function() {
    if (this.placeholder === "") {
       this.placeholder = "Your Name"
    }
}
disc2.onfocus =function() {
    if (this.placeholder === "Your Email" ) {
       this.placeholder = ""
    }
}
disc2.onblur =function() {
    if (this.placeholder === "") {
       this.placeholder = "Your Email"
    }
}


disc3.onfocus =function() {
    if (this.placeholder === "Your Number" ) {
       this.placeholder = ""
    }
}
disc3.onblur =function() {
    if (this.placeholder === "") {
       this.placeholder = "Your Number"
    }
}

console.log(disc3)
// end Request 