
// ==================== loco motive===============================================================================

const no1 =  document.getElementById("no1")
const no2 =  document.getElementById("no2")
const no3 =  document.getElementById("no3")
var count = 0;
var count2 = 0;
var count3 = 0;
function increment(){
  let interval= setInterval(function(){
    count++;
    no1.innerHTML="0"+ count;
    if(count === 7){
      clearInterval(interval)
    }
  },200)
};
increment()
function increment2(){
  let interval= setInterval(function(){
    count2++;
    no2.innerHTML="0"+ count2;
    if(count2 === 9){
      clearInterval(interval)
    }
  },200)
};
increment2()
function increment3(){
  let interval= setInterval(function(){
    count3++;
    no3.innerHTML= count3;
    if(count3 === 13){
      clearInterval(interval)
    }
  },200)
};
increment3()
//========================================  front page ===========================================
const AboutPci = document.getElementById("AboutPci")
const navhiden = document.querySelector(".navhiden")
AboutPci.addEventListener("mouseenter", function(e) {

  e.stopPropagation()
    navhiden.style.display = "flex";
});


AboutPci.addEventListener("mouseleave", function(evet) {
    evet.target()
   
    navhiden.style.display = "none";
});
const AboutPci2 = document.getElementById("AboutPci2")
const navhiden2 = document.querySelector(".navhiden2")
AboutPci2.addEventListener("mouseenter", function(e) {

  e.stopPropagation()
    navhiden2.style.display = "flex";
});


AboutPci2.addEventListener("mouseleave", function(evet) {
    evet.target()
   
    navhiden2.style.display = "none";
});
const AboutPci3 = document.getElementById("AboutPci3")
const navhiden3 = document.querySelector(".navhiden3")
AboutPci3.addEventListener("mouseenter", function(e) {

  e.stopPropagation()
    navhiden3.style.display = "flex";
    
});


AboutPci3.addEventListener("mouseleave", function(evet) {
    evet.target()
   
    navhiden3.style.display = "none";
});
// ========================================================= bar tab====================================================================================================
const bar = document.getElementById("bar");
const hdnav = document.getElementById("hdnnv");

bar.addEventListener("click", function() {
    if (hdnav.style.display === "none" || hdnav.style.display === "") {
        hdnav.style.display = "flex"; 
        hdnav.style.zIndex = 1; 
        hdnav.style.flexDirection = "column"; 

        gsap.fromTo(
            "#hdnnv", 
            { x: "-100%" }, 
            { x: "0%", duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
            "#hdnnv a", 
            { opacity: 0.5, x: -20 },    
            { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 }
        );
    } else {
      
        gsap.to(
            "#hdnnv", 
            { x: "-100%", duration: 1, ease: "power3.in" }
        );

        
        gsap.to(
            "#hdnnv a", 
            { opacity: 0, x: -20, stagger: 0.1, duration: 0.5 }
        );


        setTimeout(function() {
            hdnav.style.display = "none"; 
        }, 1000); 
    }
});

//==============================================  hdn show =============================================================================================================
const home = document.getElementById("home")
const hdnm = document.getElementById("hdnm1")
home.addEventListener("click",function(){
    if (hdnm.style.display === "none" || hdnm.style.display === ""){
        hdnm.style.display="flex"
    }
    else{
        hdnm.style.display="none"
    }
})
const home2 = document.getElementById("home2")
const hdnm2 = document.getElementById("hdnm2")
home2.addEventListener("click",function(){
    
    if (hdnm2.style.display === "none" || hdnm2.style.display === ""){
        hdnm2.style.display="flex"
    }
    else{
        hdnm2.style.display="none"
    }
})
const home3 = document.getElementById("home3")
const hdnm3 = document.getElementById("hdnm3")
home3.addEventListener("click",function(){
    
    if (hdnm3.style.display === "none" || hdnm3.style.display === ""){
        hdnm3.style.display="flex"
    }
    else{
        hdnm3.style.display="none"
    }
})

gsap.from("#gsap ",{
    opacity:0,
    color:"red",
    delay:1,
    y:50,
    duration:2,
    stagger:0.3 



})
//===================================================================================================================================================================================
var loder = document.getElementById("loding")
function myfunction(){
 setInterval(() => {
   loder.style.display="none"
 }, 3000);
}
gsap.to("#nav",{
 height:"10%",
 backgroundColor:"white",
  duration:0.5,
  scrollTrigger:{
    trigger:'#nav',
    scroller:"body",
    markers:true,
    start:"top-10%",
    scrub:true
  }
})
gsap.to(".aboutpci",{
  backgroundColor:"blue",
  scrollTrigger:{
    trigger:".aboutpci",
    scroller:"body",
    markers:true,
    start:"top 40%",
    end:"top 100%",
    scrub:2
  }
})
gsap.to(".latewin",{
  backgroundColor:"blue",
  scrollTrigger:{
    trigger:".latewin",
    scroller:"body",
    markers:true,
    start:"top 40%",
    end:"top 100%",
    scrub:2
  }
})
gsap.to(".latewinh1",{
  backgroundColor:"blue",
  scrollTrigger:{
    trigger:".latewinh1",
    scroller:"body",
    markers:true,
    start:"top 40%",
    end:"top 100%",
    scrub:2
  }
})
