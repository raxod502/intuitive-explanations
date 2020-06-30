const puzzles = [
  {
    title: "A Crafty Puzzle",
    puz:
      "https://drive.google.com/file/d/1dpiZnoMgR6p5WXF0tohTqGjq_ZpDdUwT/view?usp=sharing",
    hash: "f3af49146b785311f1bc522a2a864ff16b374946e04a0c4f8e23806ed28a99af",
    solCrypt:
      '{"iv":"vdgadm0h2ueIQ5cR4Gf2pQ==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"ZwWaQAY7grk=","ct":"WD6Edq6Tpb21zfEt4ARQqlmZ9rZhNUm1gvjhpY0QQYKrOvOHcx0nJ3VeNoFy/JCxbQeLPP0wc3tP8Vv52k4utkqwh/tJUhn4GGkNh8kDYLRF5/dPWN/zWdjs"}',
  },
  {
    title: "Basic Arithmetic",
    puz:
      "https://drive.google.com/file/d/1XqgF9gcChQFQCS3V_5ccbt2HLLkiwkbU/view?usp=sharing",
    hash: "821f700bb6448793533d6c3699bdb963995fc6372c12c76a2ff7f7fcf9b4f651",
    solCrypt:
      '{"iv":"KkvVYdyXvB8sJ7s4iO7+4g==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"pfe8H5vUENc=","ct":"zRj28We+o4frTDgRkWOccrV+DiyevUx+UihPSOq1Qp9TGlPGUGeUf8lYppJ0TIJtkt6tXQG2jvoBA3CyMGkZL3cNQNIziru5WZ6SAXsk18L/KdyN/D4ee/UO"}',
  },
  {
    title: "Circle of Life",
    puz:
      "https://drive.google.com/file/d/1KrpU3P9FMESQyl3K7e0NEM0k-fA_Ndy8/view?usp=sharing",
    hash: "a9e7d752c811dc903a17380b8f8c1b3bd979d6c519040c86d8695cb0473b3ad3",
    solCrypt:
      '{"iv":"Spyz/HrUMv5Rsp/Fw0g8VQ==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"9rSRbZu/vdE=","ct":"qb7ukHIRhTWh3tjSVciRbYT5XDxXyEMLCaHGiE1RQ0ZwXia9lW7iL55cvuwpPp48qhVyZr1SMNQVUvtwoSDMvkiChWmwjFhjUTEJbXPZdZ+6agVoX75GteBB"}',
  },
  {
    title: "Contrary Crossword",
    puz:
      "https://drive.google.com/file/d/1Cv7x5dAoli6oMNzIjwrJjmpgDLWXWys_/view?usp=sharing",
    hash: "42abb7512027c2959f9ec9c5aac3eb5e596c76840768f1bc4502476d56eab87b",
    solCrypt:
      '{"iv":"vhQRBSCUwOCWlsEDGlvNtg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"UO/6zOMTN/Y=","ct":"jiiNeiO1VNlviA124qMEYDe9xRS4rEt4BJRbIZ9IpHW0RGdW0qwbZ4atFoMX8RM0xIe7chqBxftAhgkyNHlUakXGdd2PHRQNCFJ/2T4Ae2gW+0sRHbYpSmho"}',
  },
  {
    title: "Degrees",
    puz:
      "https://drive.google.com/file/d/1brEC0taCx9aDyu8oKpergCV62FiK7XPt/view?usp=sharing",
    hash: "0ce3c77046694c7d44aed3c3552ceb23e68053f89ba02e03a240fc9f7cb0c7b0",
    solCrypt:
      '{"iv":"jKhE80Qj/6956W2SjDivBw==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"tGK5i5G0D0Y=","ct":"abtn6rzsKMb0yeRET5zmAPp47X+emaDR/4fsFqveTyI8mQaP2XxUP5y4E2/J14NsnoeT2qdOMDNVlLsfZlxhOKJMfNkm5i38TD1wnn7KpSf4ys6j9DEqmYN9"}',
  },
  {
    title: "Endless Castle",
    puz:
      "https://drive.google.com/file/d/1D12xI7mZnTbd1rR_VLhKASRb1uiK4HHn/view?usp=sharing",
    hash: "b46dc679cdf57f0db46263c81287060a18cc7cf89a158923f5e21fb6606276cf",
    solCrypt:
      '{"iv":"x32/WX6XRdGs5+H+D42SSg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"syNxpNPZppQ=","ct":"w4JvpmHPx4WH4sXKoQT6tqm6ql147ek6nt5n3W9nuaNn66Kg+Ju1iwrbE5NUpbsL2Ur0I8PznM21BXxb3lksX29DzmSnFE/P/R3kmGfN/9M5Zuqdh9Zqjn+E"}',
  },
  {
    title: "Flight Corrections",
    puz:
      "https://drive.google.com/file/d/1m1M4tu9Fpq9-hXyoENMqQCrvWlfFE19Z/view?usp=sharing",
    hash: "49c155caa79be806786b5118ef45ab978d69de3147f6a87c66f96ec760e73db0",
    solCrypt:
      '{"iv":"hd8gZS+qv8oSACuVpZqxig==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"lTNRyClk2qY=","ct":"TvrOpGhl/HvPuGLzKFgddyaYVz+JSRvBaYd16d9xnG1JL6XgVo4gtXVQ1si8Pd0pRI1KC35uHezXrzfUlB/3DLv2kOtUjch+joQ2ST3j3eSprM9MPjPWqGtG"}',
  },
  {
    title: "Identification",
    puz:
      "https://drive.google.com/file/d/1ROb3KOAJnrWK2T4rvdzKO5Zi-b9mAOCV/view?usp=sharing",
    hash: "3387d61728cdf0b32daf6776b672b06cf62ce0fe66f21efb3d43dc8a51aa81d5",
    solCrypt:
      '{"iv":"XEWNh+BWJBaYOyoW4UAVyg==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"v2DTcluanj4=","ct":"sznvm/5DLVXRRnZcJBSeB9KU8TFs/LsPsvbfHb+einbw/6Tx8Tt5ZcfSrOdjVMZs4+KFUOEZSzA5VSo/ZJiFlRBseJu7egsP7nbQNrJe7+4PQYASvZ6UFESU"}',
  },
  {
    title: "PriPri",
    puz:
      "https://drive.google.com/file/d/1pRnFheyiyelRH3Alz9exTUYUa31Zh2q2/view?usp=sharing",
    hash: "052886256f2eb5224f013b47ed38b4199e799db211813c24691d588c46248b29",
    solCrypt:
      '{"iv":"DQloGfawJ9Kwx8sn8MiY2w==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"1w7g/1tUflE=","ct":"DI7vhOTbfT/Nh6QR3AQ5ZJeBlZTHOD0UHyrOLUs3iGQmXb4S9m6aiXaNWVGfghTjGLoL9EY0aV6gbTQEBDZByqR+0BvLSITnkXdqUo0gzt6cT8KEQXWC1gg1"}',
  },
];

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
    if (guessList.length > 0) {
      const hdr = document.createElement("h5");
      hdr.innerText = "Checked answers:";
      submissions.appendChild(hdr);
      const ul = document.createElement("ul");
      for (let i = guessList.length - 1; i > -1; i--) {
        const guess = guessList[i];
        const submission = document.createElement("li");
        submission.classList.add("puzzle-submission");
        submission.innerText = guess;
        if (solved[puzzle.title] && i === guessList.length - 1) {
          const a = document.createElement("a");
          a.href = solved[puzzle.title];
          a.target = "_blank";
          a.innerText = "read solution";
          const yay = document.createElement("i");
          yay.appendChild(document.createTextNode(" ("));
          yay.appendChild(a);
          yay.appendChild(document.createTextNode(")"));
          submission.appendChild(yay);
          submission.classList.add("correct");
        } else {
          submission.classList.add("incorrect");
        }
        submissions.appendChild(submission);
      }
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
  render();
  alert("Erased your submission history!");
};
