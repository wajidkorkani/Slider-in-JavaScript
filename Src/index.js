let image = document.querySelector("img") //Select the image tag

//Create an image array and names of all images you have
let imageList = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg", "six.jpg"]

let i = 0 //Initailize the variable i and set it equal to 0

//Define a function and write the logic
function slide(){
    if(i >= imageList.length){
        i = 0
    }
    image.src = imageList[i]
    i++
}

window.onload = slide() // There is not image added in the image tag that is why slide function is being called here

window.onload = setInterval(slide, 5000) // When page will be refershed the setInterval function will call the slide function again and again after a specific time.