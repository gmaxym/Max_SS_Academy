function circle() {

    circleDiv.style.width = diametr.value + "px";
    circleDiv.style.height = diametr.value + "px";
    circleDiv.style.borderRadius = "50%";
    circleDiv.style.background = bgC.value;
}

btn1.onclick = circle;
