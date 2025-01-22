let form = document.forms[0];
let main = document.querySelector("main");
let success = document.querySelector(".succes");
let errorMessage = document.querySelector("label.error");
let dismissButton = document.querySelector("button");
let input = document.querySelector("input[type='text']");
let span = document.getElementById("email")

main.style.display = "flex";

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent Default behavier (submit button)

  if (validEmail(input.value)) {
    errorMessage.style.display = "none";
    input.classList.remove("error");
    span.innerHTML = input.value;
    main.style.display = "none";
    success.style.display = "flex";
    input.value = "";
  } else {
    errorMessage.style.display = "block";
    input.classList.add("error");
  }
});

dismissButton.addEventListener("click",()=>{
  main.style.display = "flex";
    success.style.display = "none";
})

function validEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the regex
  return emailRegex.test(email);
}
