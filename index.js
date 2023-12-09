function convertToDecimal() {
  let binaryValueID = document.getElementById("binaryInput");
  let decimalValueID = document.getElementById("decimalValue");
  let errorMessageID = document.getElementById("errorMessage");
  let binaryValue = binaryValueID.value;
  let decimalNumber = 0;
  let power = 0;
  let binValueLength = binaryValue.length;
  let validBinary = false;

  decimalValueID.setAttribute("value", "");
  errorMessageID.innerHTML = "";
  binaryValueID.classList.remove("emptyField");

  if (binValueLength !== 0) {
    for (let i = binValueLength - 1; i >= 0; i--) {
      if (binaryValue[i] == "0" || binaryValue[i] == "1") {
        if (binaryValue[i] == "1") {
          decimalNumber += 1 << power;
        }
        validBinary = true;
        power++;
      } else {
        validBinary = false;
        break;
      }
    }
    if (validBinary === true) {
      decimalValueID.setAttribute("value", decimalNumber);
    } else {
      binaryValueID.classList.add("emptyField");
    }
  } else {
    binaryValueID.classList.add("emptyField");
  }
}
