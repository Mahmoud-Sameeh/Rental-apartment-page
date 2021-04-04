// var contactbtn=document.getElementById("contact")
// contactbtn.onkeyup=()=>{
//     console.log("ssss")
// };
var x=document.querySelector("body > div > div > div.col-md-8.show > div:nth-child(2) > div");
var sub=document.querySelector("body > div > div > div.col-md-8.show > div:nth-child(2) > div > div.callout-container > button");
sub.addEventListener("click",function(){
    console.log("kkkkkkkk")
x.style.display="none";})  ;

var tt=document.querySelector("body > div > div > div.col-md-4.show.dashbored > div.container-fluid.sidenav > div:nth-child(5)");


tt.onclick=function()
{x.style.display="block";
    console.log("sss")
}
var first_img=document.querySelector("body > div.w3-main.w3-white > div.w3-row-padding.w3-section > div:nth-child(1) > img")
var second_img=document.querySelector("body > div.w3-main.w3-white > div.w3-row-padding.w3-section > div:nth-child(2) > img")
var THird_img=document.querySelector("body > div.w3-main.w3-white > div.w3-row-padding.w3-section > div:nth-child(3) > img")
var fourth_img=document.querySelector("body > div.w3-main.w3-white > div.w3-row-padding.w3-section > div:nth-child(4) > img")
var main=document.querySelector("body > div > div > div.col-md-8.show > div.show.mainimg.container-fluid > div:nth-child(2) > div > img")
function changeimg(event)
{
   main.src=  event.target.src
}
export let xm = 123;
