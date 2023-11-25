const puzzles = [
  {
    title: "A Crafty Puzzle",
    puz: "https://link.intuitiveexplanations.com/d19bbc2456de4765957cedb81421b3eb",
    hash: "f3af49146b785311f1bc522a2a864ff16b374946e04a0c4f8e23806ed28a99af",
    solCrypt:
      '{"iv":"5YD+xaBOGkeEOfFhcjkiYw==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"/ceaB4fxjk8=","ct":"TxsX9Y1C8pczFU/KSh7ZENB2Kvv+03DsP3H9y2W6CMc61BLQvWh7SlAZbVa4tec6oz1QHU5SNQDxWPMiPfXbcOut70bwgpF5yvwRr9q7bg=="}',
  },
  {
    title: "Basic Arithmetic",
    puz: "https://link.intuitiveexplanations.com/9935841835bc4539879a1cfa104b142b",
    hash: "821f700bb6448793533d6c3699bdb963995fc6372c12c76a2ff7f7fcf9b4f651",
    solCrypt:
      '{"iv":"hSKepVbi2GDI/oL5lXKNvQ==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"MwadRpM26zk=","ct":"zlIb95KWhACyQ2RithS0a6+d9MXrMa5HRlhfT3kDVoYlIyCZoNv2ev/aPCXYrwOutfJCJzlSO69aLnUCUPmt879kkwYeLSqQLOr4FsA/WA=="}',
  },
  {
    title: "Circle of Life",
    puz: "https://link.intuitiveexplanations.com/b62217fa9a16423bb76bab09514a7e07",
    hash: "a9e7d752c811dc903a17380b8f8c1b3bd979d6c519040c86d8695cb0473b3ad3",
    solCrypt:
      '{"iv":"Cb9KPOeC/CBl5RxIphLZ8g==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"nQDHwoAxQm0=","ct":"/cX1YoRcRZiqDYiZvF7YyYYknLShxrIxWPpZ9LCR24lI0X/+GmYcjrGifnuQbSTpZKkxPWRoARHQbdwbhrFwiZC7NTujMmlCyZT9lCYbBg=="}',
  },
  {
    title: "Contrary Crossword",
    puz: "https://link.intuitiveexplanations.com/e7fa6bf718704909bda2e46d047bf7c4",
    hash: "42abb7512027c2959f9ec9c5aac3eb5e596c76840768f1bc4502476d56eab87b",
    solCrypt:
      '{"iv":"jQlolUw3G6BR8UloqX+pxQ==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"iCeTM6r+bkA=","ct":"muTJ64WaezFOvrpXjt8APkDudSE="}',
  },
  {
    title: "Degrees",
    puz: "https://link.intuitiveexplanations.com/857cea409eb24e8aa7368bfd2a80f93b",
    hash: "0ce3c77046694c7d44aed3c3552ceb23e68053f89ba02e03a240fc9f7cb0c7b0",
    solCrypt:
      '{"iv":"fsfzJ7ZbK6GvpbEOttSRkA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"IKo8RteNix8=","ct":"fSnvP+azkng/LOx7sVbr9hw8rDMs17m1wFhpM+Cba6CQEgV0WDQtdkZG8uAnBCQKcaDOC3xJNCwJoXyaATfKpYfDg828+Mch+LXAG5NKhQ=="}',
  },
  {
    title: "Endless Castle",
    puz: "https://link.intuitiveexplanations.com/a823b834e97b40e187d4d5800e1fd541",
    hash: "b46dc679cdf57f0db46263c81287060a18cc7cf89a158923f5e21fb6606276cf",
    solCrypt:
      '{"iv":"HnjlXSy8KJl+XIqro/Xcfg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"84DQVVhfeGc=","ct":"J54hVfrqQoGIaDCgM04THM627w04oZ3LiGdHPDfKRDh/XkhKFDUzgEMlA4cURcAvFr5IMJQX5UkB19UFcT8LQFDPQ2KY6kjj8MtUOf08UQ=="}',
  },
  {
    title: "Flight Corrections",
    puz: "https://link.intuitiveexplanations.com/f41a365e61e4403591279d97fa7268e2",
    hash: "49c155caa79be806786b5118ef45ab978d69de3147f6a87c66f96ec760e73db0",
    solCrypt:
      '{"iv":"AIj7144e5RxiFT9fPe3ySw==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"/NW4CCo/L40=","ct":"+bw1LXxfOorUQYrLU8LIUTR6hRQHlLo4IBFHHbqGHTeMpI17y/s+/mvjANUaq0kT2F1gRQzh5bPD2NIa0NuWY+M+4KJt49xqFMHz5cIJrQ=="}',
  },
  {
    title: "Identification",
    puz: "https://link.intuitiveexplanations.com/4754eec5eb7d47989a687442bc3944da",
    hash: "3387d61728cdf0b32daf6776b672b06cf62ce0fe66f21efb3d43dc8a51aa81d5",
    solCrypt:
      '{"iv":"CYEdHH9Znuk6OQbxmyscUw==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"ctjKpyONdPs=","ct":"RRKt+s4s6wge67Lj6r+ZiQj/NclxYJ41G3g86Kogea+3tvImroaNHfo4ZvsVrGNAzFxTksBr11EmBwxryD+Xp/by1KjDsPtc7IsK3cNQHw=="}',
  },
  {
    title: "PriPri",
    puz: "https://link.intuitiveexplanations.com/e414555505f343c6a8de2970ac42d509",
    hash: "052886256f2eb5224f013b47ed38b4199e799db211813c24691d588c46248b29",
    solCrypt:
      '{"iv":"kVEFHhpOtAP2IsMy7oev+g==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"3eKkIiQKCYY=","ct":"k61jrFZFgDQ+iicu1lVwtlzETpBnbVE/io6gq/kK0hIkM8bi/FFTLSRGi+vCTSMGzILa589vgMvpj5Vs3Xz0/OUyF+tPFtFZ9ScbO4lZQg=="}',
  },
];

const metasolCrypt =
  '{"iv":"3uHW5zqwyfUMTy8WuOwmCA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"EO32MD5JtWY=","ct":"xkWhiOIm64s/s30oA1/WYUVTxUd9GbdhO+ZN8MD7AOmj5jxxxEGj4r9+TQYbQLpQBac6Ltg8AI15O5PgYCl/vOVxIkeip7jpiVEeSNfrTw=="}';

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
            "solution hidden until all puzzles are solved",
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
