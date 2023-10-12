document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("right");
    const productCards = document.querySelector(".product_cards");
  
    button.addEventListener("click", () => {
      productCards.scrollLeft += 200;
      console.log("Clicked to scroll right");
    });
  
    const button1 = document.getElementById("left");
  
    button1.addEventListener("click", () => {
      productCards.scrollLeft -= 200;
      console.log("Clicked to scroll left");
    });
  });

  const open = () =>{
    document.getElementById("hamberger")
  }
  

