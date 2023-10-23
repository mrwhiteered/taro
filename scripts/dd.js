let itemList= document.querySelectorAll('.item__drive')

itemList.forEach(el=>{
    let DDB= el.querySelector('.DDTButton')
    let DDTText = el.querySelector('.dropdown-text')
    let imgDDT = el.querySelector('.dropDown__img')

    DDB.addEventListener('pointerdown', DDTOpen)

   function DDTOpen() {     
  
      if (DDTText.classList.contains("showDDT")) {
        DDTText.style.maxHeight = null;
        DDTText.classList.remove("showDDT");
        imgDDT.classList.remove("rotate");
      } else {
        DDTText.style.maxHeight = DDTText.scrollHeight + "px";
        DDTText.classList.add("showDDT");
        imgDDT.classList.add("rotate");
      }
    
  }

})


