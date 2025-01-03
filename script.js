document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  body.addEventListener("click", function (event) {
    // console.log(event);

    const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    // console.log(circleElement);

    const X_Coordinate = event.clientX;
    const Y_Coordinate = event.clientY;

    circleElement.style.left = `${X_Coordinate - 25}px`;
    circleElement.style.top = `${Y_Coordinate - 25}px`;

    // Generate Random Color
    const Hex = "0123456ABCDEF";
    let color = "#";
    for (let i = 0; i <= 5; i++) {
      color += Hex[Math.floor(Math.random() * Hex.length)];
    }
    // console.log(color);
    circleElement.style.background = color; // Add Color to our Circle

    // Generate Random Msg
    const Messages = ["Hi", "Hello", "Welcome", "Namaste", "Radhe Radhe"];
    circleElement.textContent =
      Messages[Math.floor(Math.random() * Messages.length)];
    // console.log(circleElement.textContent);
    circleElement.classList.add("flex");

    body.appendChild(circleElement);

    setTimeout(() => {
      circleElement.remove();
    }, 2500);
  });
});
