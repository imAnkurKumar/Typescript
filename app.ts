const num1Elem = document.getElementById("num1") as HTMLInputElement;
const num2Elem = document.getElementById("num2") as HTMLInputElement;
const buttonElem = document.querySelector("button")!;

function add(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

buttonElem.addEventListener("click", () => {
  const num1 = num1Elem.value;
  const num2 = num2Elem.value;
  const result = add(+num1, +num2);
  const stringResult = add(num1, num2);
  console.log(result);
  console.log("stringResult >>", stringResult);
  
});
