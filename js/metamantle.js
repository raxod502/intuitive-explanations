/**
 * Just so you know, it won't be super helpful to look at this code.
 * The behavior of the device is server-side, and you won't get much
 * insight looking at variable names. It's intended that the solving
 * the puzzle neither require nor benefit from programming knowledge.
 */

"use strict";

let cachedResponses = {};
try {
  cachedResponses =
    JSON.parse(localStorage.getItem("metamantleCachedResponses")) || {};
} catch (err) {
  console.error(err);
}

const eltStringInput = document.getElementById("string-input");
const eltStringSubmit = document.getElementById("string-submit");
const eltReport = document.getElementById("report");
const eltAnswerInput = document.getElementById("answer-input");
const eltAnswerSubmit = document.getElementById("answer-submit");
const eltAnswerResponse = document.getElementById("answer-response");

const ensureLettersOnly = function (event) {
  const selStart =
    this.selectionStart -
    (this.value.slice(0, this.selectionStart).match(/[^a-zA-Z]/g) || []).length;
  const selEnd =
    this.selectionEnd -
    (this.value.slice(0, this.selectionEnd).match(/[^a-zA-Z]/g) || []).length;
  const selDirection = this.selectionDirection;
  this.value = this.value.toUpperCase().replace(/[^A-Z]/g, "");
  this.setSelectionRange(selStart, selEnd, selDirection);
};

eltStringInput.oninput = ensureLettersOnly;
eltAnswerInput.oninput = ensureLettersOnly;

const validateResponse = (data) => {
  if (!Array.isArray(data)) {
    if (!(data && typeof data == "object"))
      throw new Error(`unexpected data type returned from server: ${data}`);
    if (data.error === "not supported") return null;
    if (data.error === "internal")
      throw new Error(`unexpected internal server in server`);
    throw new Error(`unexpected data format returned from server: ${data}`);
  }
  if (data.length !== 6)
    throw new Error(`wrong length array returned from server: ${data.length}`);
  if (data[0] !== null) {
    if (!Array.isArray(data[0]))
      throw new Error(`data[0] not an array: ${data[0]}`);
    if (data[0].length === 0) throw new Error(`data[0] is empty`);
    for (const elt of data[0]) {
      if (elt !== 0 && elt !== 1 && elt !== 2)
        throw new Error(`wrong entry in data[0]: ${elt}`);
    }
  }
  if (!Array.isArray(data[1]))
    throw new Error(`data[1] not an array: ${data[1]}`);
  if (data[1].length !== 3)
    throw new Error(`wrong length data[1]: ${data[1].length}`);
  for (const elt of data[1]) {
    if (!Number.isInteger(elt) || elt < 0)
      throw new Error(`wrong entry in data[1]: ${elt}`);
  }
  if (!Number.isInteger(data[2]) || data[2] < 0)
    throw new Error(`unexpected data[2]: ${data[2]}`);
  if (data[3] !== null) {
    if (!Number.isInteger(data[3]) || Math.abs(data[3]) >= 1e6)
      throw new Error(`unexpected data[3]: ${data[3]}`);
  }
  if (data[4] !== null) {
    if (typeof data[4] !== "number" || Math.abs(data[4]) > 1)
      throw new Error(`unexpected data[4]: ${data[4]}`);
  }
  if (data[5] !== null) {
    if (typeof data[5] !== "number" || data[5] < 0 || data[5] >= 1e6)
      throw new Error(`unexpected data[5]: ${data[5]}`);
  }
  return data;
};

const getReport = (string, data) => {
  if (data === null) return "[ENTRY NOT PROCESSABLE]\n\n\n\n\n\n\n\n";
  let record = [];
  record.push([`RECORD NAME: ${string}`]);
  let report = [];
  report.push("COMPOSITION: {" + data[1].join(", ") + "}");
  report.push("DISTANCE (LOGICAL): " + data[2]);
  if (data[0] === null) report.push("ALIGNMENT: [N/A]");
  else {
    let line = "";
    for (const elt of data[0]) {
      switch (elt) {
        case 0:
          line += "▁";
          break;
        case 1:
          line += "▄";
          break;
        case 2:
          line += "█";
          break;
        default:
          throw new Error(`unexpected error`);
      }
    }
    report.push("ALIGNMENT: " + line);
  }
  if (data[3] === null) report.push("OFFSET: [N/A]");
  else report.push("OFFSET: " + data[3]);
  if (data[4] === null) report.push("SIMILARITY: [N/A]");
  else report.push("SIMILARITY: " + data[4].toFixed(4));
  if (data[5] === null) report.push("DISTANCE (PHYSICAL): " + "[N/A]");
  else report.push("DISTANCE (PHYSICAL): " + data[5].toFixed(2));
  record.push(report);
  return record.map((report) => report.join("\n")).join("\n\n");
};

const submitString = async () => {
  const string = eltStringInput.value.replace(/[^A-Z]/g, "");
  if (string.length === 0) return;
  let data;
  if (cachedResponses.hasOwnProperty(string)) data = cachedResponses[string];
  else {
    const resp = await fetch(
      `https://faqpgztusmzkwzfhb3sxux6myu0zmfpx.lambda-url.us-west-1.on.aws?string=${string.toLowerCase()}`
    );
    if (!resp.ok) {
      throw new Error(
        `got unexpected response code ${resp.status} from server`
      );
    }
    data = await resp.json();
    data = validateResponse(data);
    cachedResponses[string] = data;
    localStorage.setItem(
      "metamantleCachedResponses",
      JSON.stringify(cachedResponses)
    );
  }
  eltReport.innerText = getReport(string, data);
};

const submitStringOrError = () => {
  eltStringSubmit.disabled = true;
  eltStringSubmit.innerText = "Whirrr...";
  eltStringInput.disabled = true;
  submitString()
    .then(() => {
      eltStringSubmit.disabled = false;
      eltStringInput.disabled = false;
      eltStringSubmit.innerText = "Pull the lever";
      eltStringInput.value = "";
      eltStringInput.focus();
    })
    .catch((err) => {
      eltStringSubmit.disabled = false;
      eltStringInput.disabled = false;
      eltStringSubmit.innerText = "Pull the lever";
      eltStringInput.value = "";
      alert(`Got an unexpected internal error: ${err}`);
    });
};

eltStringSubmit.onclick = function (event) {
  submitStringOrError();
};
eltStringInput.onkeyup = function (event) {
  // Check if event was enter key
  if (event.keyCode === 13) {
    submitStringOrError();
  }
};

const submitAnswer = () => {
  const answer = eltAnswerInput.value.replace(/[^A-Z]/g, "");
  if (answer.length === 0) return;
  const hash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(answer));
  if (
    hash === "8129b9d407716f44eaecb351228a80621a9c89fba068ba669c4c4eb73a255619"
  ) {
    try {
      eltAnswerResponse.innerText = sjcl.decrypt(
        answer,
        '{"iv":"PzPX1/8+eSUq2X9czO6xCA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"EvFc+40BRwQ=","ct":"/USfdbRD762N5XIUGUPTBZsgJ+ifnGyv7IYVXGUIjtpGlIthd0F1AW63ayL638PQ5tiZIrWPldlVM2BrubZ3Jgp3sTo5v1xeYjRwRNiQ+tuM/g0B69+m+FQ+kVSD29dpL+XpZVxciXTwi4AlcdbYV80ovAyPZH1SedcfriATOMNVR0dUAsnqHvo8GE+dB7GytRfk5uq/rLUwVDvLbEPMax+qafvTYggzguUAz6yWfyWATMXURp+mlDX9K0C4bg/R10wuOUp3neMb+YDQmUWRwoaS+k/vxPc3NrrCbTLG0dTuFVU9OcfyfpEmBrjAW82rD7iuqYwz9cxgeatNXuQyqmcLhZ4a5kAS8z/8wVtKaXPddprrf/VBu7VyHLAEw23uLMiHIW9hcVABB1wvXChV1nEoepkaWIRadZFu6ou8D3w7IniqW8B4QOqTRqmtjdNSGdrR8vZdCPGU1olIt6crSw5ACPbFqjlD8MKeGxoWyCPd"}'
      );
    } catch (err) {
      alert("internal error with the cryptography");
    }
  } else {
    eltAnswerResponse.innerText = `Somehow, '${answer.toLowerCase()}' doesn't feel right.`;
  }
};

eltAnswerSubmit.onclick = function (event) {
  submitAnswer();
};
eltAnswerInput.onkeyup = function (event) {
  // Check if event was enter key
  if (event.keyCode === 13) {
    submitAnswer();
  }
};
