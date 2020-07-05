const puzzles = [
  {
    title: "A Crafty Puzzle",
    puz:
      "https://drive.google.com/file/d/1dpiZnoMgR6p5WXF0tohTqGjq_ZpDdUwT/view?usp=sharing",
    hash: "f3af49146b785311f1bc522a2a864ff16b374946e04a0c4f8e23806ed28a99af",
    solCrypt:
      '{"iv":"RHGE7ptX1FvpVVG/fnI0DA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"e4ZV2g9qcbc=","ct":"09LO+doMZSWGz048Dfv1/3323FKjUMwqMVu/mRkb6FCzDas+HjEdMhOHLYGSWtvbNXajmE4BXSikMsrYncw9m1PIWhCKDG7ZM4wL0o/LeHSKFM8N+MRVgUcv"}',
  },
  {
    title: "Basic Arithmetic",
    puz:
      "https://drive.google.com/file/d/1XqgF9gcChQFQCS3V_5ccbt2HLLkiwkbU/view?usp=sharing",
    hash: "821f700bb6448793533d6c3699bdb963995fc6372c12c76a2ff7f7fcf9b4f651",
    solCrypt:
      '{"iv":"53eUDiKz/WeOjLZkJScqVg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"VpfECVsYKqQ=","ct":"EhmBx4WebwKensRNPqVHUbo8Dy1fIbxNCyOwAKmKMckAJ63Ib8hHAIJGVAIxihGl70Af2w/1O2DiShFki9wUgcGHy0Q8fRzJUx3ybQiNBwxqVUlyNV/ro+xv"}',
  },
  {
    title: "Circle of Life",
    puz:
      "https://drive.google.com/file/d/1KrpU3P9FMESQyl3K7e0NEM0k-fA_Ndy8/view?usp=sharing",
    hash: "a9e7d752c811dc903a17380b8f8c1b3bd979d6c519040c86d8695cb0473b3ad3",
    solCrypt:
      '{"iv":"KoIZzxsSLCMOkVIie3N3jA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"4uQRKR79eJE=","ct":"9dlOvYKUajK1s+YWYx/lcLVPrYgTSf+VFCrMP6dYjnUnQyQtVFQhQ234r/6up85xZAO9nMh7zz5ZA0rULwnQsfkk5ARPeVPGshCtO3BlQ/mvA+1J6HVgVjd5"}',
  },
  {
    title: "Contrary Crossword",
    puz:
      "https://drive.google.com/file/d/1Cv7x5dAoli6oMNzIjwrJjmpgDLWXWys_/view?usp=sharing",
    hash: "42abb7512027c2959f9ec9c5aac3eb5e596c76840768f1bc4502476d56eab87b",
    solCrypt:
      '{"iv":"QC1XxhK78mcpUyPENeVEcA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"rjRZeFB0fo0=","ct":"KpJPR9TcvRRDjfMw8/R9vDfFq24="}',
  },
  {
    title: "Degrees",
    puz:
      "https://drive.google.com/file/d/1brEC0taCx9aDyu8oKpergCV62FiK7XPt/view?usp=sharing",
    hash: "0ce3c77046694c7d44aed3c3552ceb23e68053f89ba02e03a240fc9f7cb0c7b0",
    solCrypt:
      '{"iv":"W95hzSQJ2oT5oBMCSJwvTA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"4VDoU/yEZrY=","ct":"tujxeX46hjDeV4Yl8DNe+Fi0F2swoIhdaXrVY3j0lwFz11eoug+7b8ylA7cz+4ekSqBYjOK34QXlz4vzSV8YWieXaUQI9tIJbt88+b9btEZM5GJfAd1KuNfM"}',
  },
  {
    title: "Endless Castle",
    puz:
      "https://drive.google.com/file/d/1D12xI7mZnTbd1rR_VLhKASRb1uiK4HHn/view?usp=sharing",
    hash: "b46dc679cdf57f0db46263c81287060a18cc7cf89a158923f5e21fb6606276cf",
    solCrypt:
      '{"iv":"B9Ic9HD2M9AG/18kmAMrIw==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"TZnIJMfMOV8=","ct":"IWWP0DJVy2d8c8gmqBvohPkGi9XYnTE0wywG390jttohM/YX7IcrtYlSMHG16dsAe+iUaBr4ioIo9KbA7dBci+BqmXkrTVsKMZXtErxySdBNxZ5dCKA//jS7"}',
  },
  {
    title: "Flight Corrections",
    puz:
      "https://drive.google.com/file/d/1m1M4tu9Fpq9-hXyoENMqQCrvWlfFE19Z/view?usp=sharing",
    hash: "49c155caa79be806786b5118ef45ab978d69de3147f6a87c66f96ec760e73db0",
    solCrypt:
      '{"iv":"LURel4Jd9GfPQKYoY+o9Gg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"Tc4TZYe1ul4=","ct":"hcf7axxTpP7mZRzfs9XtsZyB0VLuDjuDlFgxhnH2ukJhSDThLcBzee0cIWtjPD3YpsD5IRa1nBlT/n+XYZQxlftHaH9sRGwppiJhrbDIh3To9tjQasrQUiYm"}',
  },
  {
    title: "Identification",
    puz:
      "https://drive.google.com/file/d/1ROb3KOAJnrWK2T4rvdzKO5Zi-b9mAOCV/view?usp=sharing",
    hash: "3387d61728cdf0b32daf6776b672b06cf62ce0fe66f21efb3d43dc8a51aa81d5",
    solCrypt:
      '{"iv":"NjO2X/aw4msF5VDHgNA1Dg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"vM5iXfoQ4NU=","ct":"+YVWQ/tNQkkd9FjJdiyukN28Ns2pnZLvpuDaOihLB5EeljerX3PX655my5+/o+wEIUh6fRRFYZOofq2xOI104g6jJ4CH0fm2ewVuCIVcLFq+ucGgSgQBwf3U"}',
  },
  {
    title: "PriPri",
    puz:
      "https://drive.google.com/file/d/1pRnFheyiyelRH3Alz9exTUYUa31Zh2q2/view?usp=sharing",
    hash: "052886256f2eb5224f013b47ed38b4199e799db211813c24691d588c46248b29",
    solCrypt:
      '{"iv":"KxOJRIPSx5H1QA5YTkvzxg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"MLnJHeeObXw=","ct":"qeGKxNQXShJ7T4OSnkT0mVKsxv3hjpNb2YGijTklFWpPJvMppUG2QXgWS8xd/v7CcGQt3M11qIPirg2KyYuka+K5mIF68PZn1sgbLF2tAzlGAZeYVR+38jMU"}',
  },
];

const metasolCrypt =
  '{"iv":"bpNKa07I0tJ5TcBDDzQPJg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"JUwcbByhkK0=","ct":"77k2MbMcNkJ9ESxmg/1ZXiOqUo1AfhTkcNJsLWC5xn+qQlfoxGHRr5zthmozzxDhvOPIs5uYPnFNUDUXpyKC8B6Msp2GAw/u72p7o5zGBdYn0Na1tSfwdFxp"}';

let guesses = {};

function loadGuesses() {
  let data;
  try {
    data = JSON.parse(localStorage.getItem("puzzleHuntGuesses"));
  } catch (err) {
    return;
  }
  if (typeof data !== "object" || !data) return;
  for (const [key, val] of Object.entries(data)) {
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
      const ul = document.createElement("ul");
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
