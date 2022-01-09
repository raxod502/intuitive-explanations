const puzzles = [
  {
    title: "A Crafty Puzzle",
    puz: "https://drive.google.com/file/d/1SEdcOGifyvORqrkWqqjVvK6dnBUm-ffI/view?usp=sharing",
    hash: "f3af49146b785311f1bc522a2a864ff16b374946e04a0c4f8e23806ed28a99af",
    solCrypt:
      '{"iv":"0sDLD3Ic3bjHUhTy8IhuSg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"Xwqhwxy7oq4=","ct":"JERoLXwcbnQNlGTOMWr2h98WXtZqAt703Cd42CNlqkhgTvptG9dU6Kop3w123mM9tuUKjBHUtUvrQmL+WCJ9AzhIBInH5qDBuH6oAhh+yDbzLsojpbosMUGa"}',
  },
  {
    title: "Basic Arithmetic",
    puz: "https://drive.google.com/file/d/1uB7IV9R_AAX9TJQyDv9yJIUQcXr51r5-/view?usp=sharing",
    hash: "821f700bb6448793533d6c3699bdb963995fc6372c12c76a2ff7f7fcf9b4f651",
    solCrypt:
      '{"iv":"lyvX5B/cyy9mkgQ5dZLvnw==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"OUZYJ+HZ1fw=","ct":"IyEcXUbGVw49tuvkewJq4bagbQ9NYeeeSj7BBp7wuMpzs1q3N3cp5xkGJKG6xMupFXg04q+BSpzl7ceQKCI1YHu7SVaYrrCL7gm471UALD7tDZ8Dp4rFDnX5"}',
  },
  {
    title: "Circle of Life",
    puz: "https://drive.google.com/file/d/1kQvyhiQgknVg2ftdHWqgFe_3aLpvV_a4/view?usp=sharing",
    hash: "a9e7d752c811dc903a17380b8f8c1b3bd979d6c519040c86d8695cb0473b3ad3",
    solCrypt:
      '{"iv":"IwevYlxnUe5H6DrWc6iSmg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"xi6NrTo/Nt8=","ct":"YmmE3GaivOgCy3dsgjLZUuYPCWIdhoauEZtAwG/tlX4rUkzoFfQZiZMTfXclTi+rUz+yWBEIJxnrO9HzWHK2dWvemm4GJshVCXNXxxTuVRVgfQMsBgpbLPst"}',
  },
  {
    title: "Contrary Crossword",
    puz: "https://drive.google.com/file/d/16QiUAj2S3upg_bxRr9XExjlQrVEbmX45/view?usp=sharing",
    hash: "42abb7512027c2959f9ec9c5aac3eb5e596c76840768f1bc4502476d56eab87b",
    solCrypt:
      '{"iv":"JTYOfBCcBGdrc33eunLjKA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"aUE76FMWNLQ=","ct":"Tb3FK1nCAqJvEDPgjJQIUUQB89Q="}',
  },
  {
    title: "Degrees",
    puz: "https://drive.google.com/file/d/1wxdTwjha5mJgDTyfy5iOZqrsrTAdMVqm/view?usp=sharing",
    hash: "0ce3c77046694c7d44aed3c3552ceb23e68053f89ba02e03a240fc9f7cb0c7b0",
    solCrypt:
      '{"iv":"uTIGMBVtYKAM3eqDIvaG/g==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"NysOrMRqfVU=","ct":"t1FsQmGdQtibVst+vrgN64tpCEwRo4aq6hN952WNkhjOZTLJmgw0qhsrWIZ/jVjkE5dKdUxyldR5PBXsq3Cf8vakptxVnx9sD+lSaXk2Dm5yg7ssP5eG6mSb"}',
  },
  {
    title: "Endless Castle",
    puz: "https://drive.google.com/file/d/18bpzcJM9qajDareFqSzLxnjaKFKSbmqT/view?usp=sharing",
    hash: "b46dc679cdf57f0db46263c81287060a18cc7cf89a158923f5e21fb6606276cf",
    solCrypt:
      '{"iv":"/Z2jNCo27gLm8MNKkSbQ8g==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"SvKk79p31fw=","ct":"b74KXeBw+0lA2QPugfIBo4oCcZXMDIVlXbt/gX6Ajja4MuTGEzdJQWBvC6HuAyurY9w8MgUOa6VvWMJu9OC8LSih2mXz7ET2vVeSL6ENgebBE8HvBVA5wbsr"}',
  },
  {
    title: "Flight Corrections",
    puz: "https://drive.google.com/file/d/1FWxLDj_Px4HDP6OwE91kXiW582uzjKVg/view?usp=sharing",
    hash: "49c155caa79be806786b5118ef45ab978d69de3147f6a87c66f96ec760e73db0",
    solCrypt:
      '{"iv":"QEKuHWttwB1WJ5ykhRdOiA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"gNu2QPYBp/8=","ct":"ZVSZIzobK6cvm7OinK+uAK+QpHOsfzgVq8VoYAi3biH1MxLp4I9eXd4Lv/yLaJZDU9j6Dgv4agZzj85e2sVqTKeB+KUZlqjwm1eIDlHLntR5XHeW0HGMRgh0"}',
  },
  {
    title: "Identification",
    puz: "https://drive.google.com/file/d/1LpXYJ8EDxlH5EV2d1jvqj0u1LMFyKqXS/view?usp=sharing",
    hash: "3387d61728cdf0b32daf6776b672b06cf62ce0fe66f21efb3d43dc8a51aa81d5",
    solCrypt:
      '{"iv":"JJa9sY3QOLfoGDWC9XnBIA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"VpcrZD+Vskw=","ct":"sAFAB7FgPhcM8d6ap/QN09vKMZw01u6/umiNm6iVrM0YqVU2mW0bNUgBkRHaTH4mV7OTIDz/ARwS/X+njMYL9PumLGSnvdmZ+N5/Kf22pbq6NT2R+C/bxJn2"}',
  },
  {
    title: "PriPri",
    puz: "https://drive.google.com/file/d/1xySk4BD7fLq5Il-x5q1sDV4ZlMlQ2a5t/view?usp=sharing",
    hash: "052886256f2eb5224f013b47ed38b4199e799db211813c24691d588c46248b29",
    solCrypt:
      '{"iv":"AwrUkU7BK0acyRZIEeknEQ==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"ejPgoRZLX7I=","ct":"IKZtarq/a7tLyJE4+wVvqwgCQTT+MXNZ8YhHiJeXYNv7cZxQfENXrnRziuV6yId+yCpxgxaoXQNQ8khZm3KYKU1rppM1biD4ydFFQK+PmaOUWsyzIXMUbbD3"}',
  },
];

const metasolCrypt =
  '{"iv":"Tme3RVCo6m3hTfRj7FnLhg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"SzWlBQY3144=","ct":"phXZLC8gTytacJLOAHcfx5RTeWOadR+2gxUrWZd9tmxNdcRwKIfXj18NcdVElP8oOCVDdiXbwJxkQAUWQtUsWpCgZPEXlOEqg1WC1JM4MxkJHCwPz28NawTV"}';

let guesses = {};

function loadGuesses() {
  let data;
  try {
    data = JSON.parse(localStorage.getItem("puzzleHuntGuesses"));
  } catch (err) {
    return;
  }
  if (typeof data !== "object" || !data) return;
  for (const [_key, val] of Object.entries(data)) {
    if (!Array.isArray(val)) return;
    val.forEach(function (elt) {
      if (typeof elt !== "string") return;
    });
  }
  guesses = data;
}

function saveGuesses() {
  localStorage.setItem("puzzleHuntGuesses", JSON.stringify(guesses));
}

let solved = {};
let metasol = null;

loadGuesses();

function normalize(guess) {
  return guess.toUpperCase().replace(/[^A-Z]/g, "");
}

function checkLatestGuess(puzzle) {
  const guessList = guesses[puzzle.title] || [];
  if (guessList.length === 0) return;
  const guess = guessList[guessList.length - 1];
  const hash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(guess));
  if (hash === puzzle.hash) {
    try {
      solved[puzzle.title] = sjcl.decrypt(guess, puzzle.solCrypt);
    } catch (err) {
      // somehow hash collision?
    }
    let stillUnsolved = false;
    let allAnswers = "";
    for (const puzzle of puzzles) {
      if (!solved[puzzle.title]) {
        stillUnsolved = true;
        break;
      } else {
        const guessList = guesses[puzzle.title];
        allAnswers += guessList[guessList.length - 1];
      }
    }
    if (!stillUnsolved) {
      try {
        metasol = sjcl.decrypt(allAnswers, metasolCrypt);
      } catch (err) {
        alert("Something went wrong with the cryptography...");
      }
    }
  }
}

puzzles.forEach(checkLatestGuess);

document.getElementById("modal-overlay").onclick = function () {
  document.body.classList.remove("modal-shown");
};

function submitGuess(puzzle) {
  const guess = normalize(document.getElementById("answer-input").value);
  document.getElementById("answer-input").value = "";
  if (!guess) return;
  if (guess.length > 30) {
    alert("There are no answers over 30 letters!");
    return;
  }
  for (const prevGuess of guesses[puzzle.title] || []) {
    if (prevGuess === guess) {
      return;
    }
  }
  if (!guesses[puzzle.title]) {
    guesses[puzzle.title] = [];
  }
  guesses[puzzle.title].push(guess);
  saveGuesses();
  checkLatestGuess(puzzle);
  render();
}

function showModal(puzzle) {
  const renderModal = function () {
    const bighdr = document.getElementById("modal-puzzle-title");
    let titleText = puzzle.title;
    if (solved[puzzle.title]) {
      titleText += " (solved)";
      document.getElementById("puzzle-submit").disabled = true;
    } else {
      document.getElementById("puzzle-submit").disabled = false;
    }
    bighdr.innerText = titleText;
    const submissions = document.getElementById("submissions");
    submissions.innerHTML = "";
    const guessList = guesses[puzzle.title] || [];
    const correctList = [];
    const incorrectList = [];
    for (let i = guessList.length - 1; i > -1; i--) {
      const guess = guessList[i];
      const submission = document.createElement("li");
      submission.classList.add("puzzle-submission");
      submission.innerText = guess;
      if (solved[puzzle.title] && i === guessList.length - 1) {
        let a;
        let href = solved[puzzle.title];
        if (href === "[Metapuzzle]" && !metasol) {
          a = document.createTextNode(
            "solution hidden until all puzzles are solved"
          );
        } else {
          if (href === "[Metapuzzle]" && metasol) {
            href = metasol;
          }
          a = document.createElement("a");
          a.href = href;
          a.target = "_blank";
          a.innerText = "read solution";
        }
        const yay = document.createElement("i");
        yay.appendChild(document.createTextNode(" ("));
        yay.appendChild(a);
        yay.appendChild(document.createTextNode(")"));
        submission.appendChild(yay);
        submission.classList.add("correct");
        correctList.push(submission);
      } else {
        submission.classList.add("incorrect");
        incorrectList.push(submission);
      }
    }
    if (correctList.length > 0) {
      const hdr = document.createElement("h5");
      hdr.innerText = "Correct answer:";
      submissions.appendChild(hdr);
      correctList.forEach((s) => submissions.appendChild(s));
    }
    if (incorrectList.length > 0) {
      const hdr = document.createElement("h5");
      hdr.innerText = "Incorrect answers:";
      submissions.appendChild(hdr);
      incorrectList.forEach((s) => submissions.appendChild(s));
    }
  };
  document.getElementById("answer-input").onkeyup = function (e) {
    if (solved[puzzle.title]) return;
    if (e.keyCode === 13) {
      submitGuess(puzzle);
      renderModal();
    }
  };
  document.getElementById("puzzle-submit").onclick = function () {
    if (solved[puzzle.title]) return;
    submitGuess(puzzle);
    renderModal();
  };
  renderModal();
  document.body.classList.add("modal-shown");
}

function render() {
  const elts = [];
  for (const puzzle of puzzles) {
    const linkDiv = document.createElement("div");
    linkDiv.classList.add("puzzle-link");
    linkDiv.innerText = puzzle.title;
    const a = document.createElement("a");
    a.href = puzzle.puz;
    a.target = "_blank";
    a.classList.add("puzzle-link");
    a.appendChild(linkDiv);
    const button = document.createElement("button");
    button.classList.add("puzzle-submit");
    button.innerText = "Check answer";
    button.onclick = function () {
      showModal(puzzle);
    };
    const submitDiv = document.createElement("div");
    submitDiv.classList.add("puzzle-submit");
    submitDiv.appendChild(button);
    const ctrDiv = document.createElement("div");
    ctrDiv.classList.add("puzzle-container");
    if (solved[puzzle.title]) {
      ctrDiv.classList.add("solved");
    }
    ctrDiv.appendChild(a);
    ctrDiv.appendChild(submitDiv);
    elts.push(ctrDiv);
  }

  const ctr = document.getElementById("puzzles");
  ctr.innerHTML = "";
  for (const elt of elts) {
    ctr.appendChild(elt);
  }
}

render();

document.getElementById("puzzle-reset").onclick = function () {
  guesses = {};
  localStorage.removeItem("puzzleHuntGuesses");
  solved = {};
  metasol = null;
  render();
  alert("Erased your submission history!");
};
