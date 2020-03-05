function circle() {

    // out.innerHTML += bgC.value+' px;'; // delete after
    // out.innerHTML += diametr.value+' px;'; // delete after
    // out.innerHTML += circle; // delete after

    // bgC.style.borderColor = bgC.value;
    circleDiv.style.width = diametr.value + "px";
    circleDiv.style.height = diametr.value + "px";
    circleDiv.style.borderRadius = "50%";
    circleDiv.style.background = bgC.value;
}

btn1.onclick = circle;
