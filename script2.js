const nameText = document.getElementById("name");


nameText.addEventListener("mouseover",(e)=>{
  nameText.innerHTML="khushi.works"
  nameText.style.marginRight="10px"
})
nameText.addEventListener("mouseout",(e)=>{
  nameText.innerHTML="khushi."
  nameText.style.marginRight="0px"
})



const bodyHeight = document.body.clientHeight;
const scrollBar = document.getElementById('scrollBar');

window.addEventListener("scroll", () => {
    const scrolled = (window.scrollY / bodyHeight) * 100;
    scrollBar.style.width = `${Math.floor(scrolled)}%`;
});
