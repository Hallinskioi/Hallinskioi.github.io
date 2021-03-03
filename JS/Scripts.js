// JavaScript source code
let imageIndex = 0;
let imageSkIndex = 0;

function intro() {
    console.log("Hello, you might be looking at my JavaScript implementation. The script I use for changing images on a timer is an array[index] loop that resets index to 0 once index is greater than or equal to array.length.", "\n", 
        "The second JS function is identical except if fires on an onClick within the image itself.");
}

function imageChangerDOW() {
    let anImage = document.getElementById("mapHighlight");
    let imageArray = [  "../Images/ModsMapsImages/map0.png",
                        "../Images/ModsMapsImages/map1.png",
                        "../Images/ModsMapsImages/map2.jpg",
                        "../Images/ModsMapsImages/map3.png",
                        "../Images/ModsMapsImages/map4.png",
                        "../Images/ModsMapsImages/map5.png",
                        "../Images/ModsMapsImages/map6.png",
                        "../Images/ModsMapsImages/map7.png",
                        "../Images/ModsMapsImages/map8.png"
    ];

    anImage.src = imageArray[imageIndex];
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

function imageChangeOnClick() {
    let clickable = document.getElementById("skHighlight");
    let imageArraySk = ["../Images/ModsMapsImages/sk1.jpg", "../Images/ModsMapsImages/sk2.jpg", "../Images/ModsMapsImages/sk3.jpg"];
    clickable.src = imageArraySk[imageSkIndex];
    imageSkIndex++;
    if (imageSkIndex >= imageArraySk.length) {
        imageSkIndex = 0;
    }

}
