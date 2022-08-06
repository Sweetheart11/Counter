let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    console.log(styles);
    if (styles.contains("decrease")) {
      count--;
    }
    if (styles.contains("increase")) {
      count++;
    }
    if (styles.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if ((count === 0)) {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
