const image = document.querySelectorAll('.image')
const mainImage = document.querySelector('.main-image')
for (let i = 0; i < image.length; i++) {
    const element = image[i];
    element.addEventListener('click' , function(){
        let src = this.getAttribute("src");
        mainImage.setAttribute("src", src)
    })
}

