  const preview = document.getElementById("preview"),
    styles = document.getElementById("styles"),
    ranges = document.querySelectorAll(".settings input"), // Use querySelectorAll to select all input elements
    copyButton = document.getElementById("copy-styles");

ranges.forEach((slider) => {
    slider.addEventListener("input", generateStyles); // Remove the parentheses here
});

function generateStyles() {
    const xShadow = document.getElementById("x-shadow").value;
    const yShadow = document.getElementById("y-shadow").value;
    const blurRadius = document.getElementById("blur-r").value;
    const spreadRadius = document.getElementById("spread-r").value;
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowOpacity = document.getElementById("shadow-opacity").value;
    const shadowInset = document.getElementById("inset-shadow").checked; // Use checked to get the checkbox value
    const borderRadius = document.getElementById("border-r").value;

    const boxShadow = `${shadowInset ? "inset" : ""} ${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px rgba(${hexToRgba(shadowColor, shadowOpacity)})`; // Use template literals
    preview.style.boxShadow = boxShadow;
    preview.style.borderRadius = `${borderRadius}px`;
    styles.textContent = `box-shadow: ${boxShadow};\nborder-radius: ${borderRadius}px;`; // Use template literals
}

function hexToRgba(shadowColor, shadowOpacity) {
    const r = parseInt(shadowColor.substring(1, 3), 16); // Fix substr to substring
    const g = parseInt(shadowColor.substring(3, 5), 16); // Fix substr to substring
    const b = parseInt(shadowColor.substring(5, 7), 16); // Fix substr to substring

    return `${r},${g},${b},${shadowOpacity}`;
}

function copyStyles() {
    styles.select();
    document.execCommand("copy");
    copyButton.innerText = "Copied!";
    setTimeout(() => {
        copyButton.innerText = "Copy Styles";
    }, 500);
}

generateStyles();
