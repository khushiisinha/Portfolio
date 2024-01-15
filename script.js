const firstText = document.getElementById("text-1");
const secondText = document.getElementById("text-2");
const thirdText = document.getElementById("text-3");



const animationVariable = [
  {
    element: firstText,
    originalText: "Hello.",
    afterText: "About",
  },
  {
    element: secondText,
    originalText: "I am",
    afterText: "Work",
  },
  {
    element: thirdText,
    originalText: "Khushi",
    afterText: "Contact",
  },
];
for (let index = 0; index < animationVariable.length; index++) {
  animationVariable[index].element.addEventListener("mouseover", (e) => {
 
        e.target.innerHTML = animationVariable[index].afterText;
        e.target.style.transition="margin left 3s"
        e.target.style.marginLeft = "40px";
     
  });
  animationVariable[index].element.addEventListener("mouseout", (e) => {
    
        e.target.innerHTML = animationVariable[index].originalText;
        e.target.style.transition="margin left 3s"
        e.target.style.marginLeft = "0px  ";
     
       
  });
}
