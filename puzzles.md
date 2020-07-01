---
title: "Puzzle Hunt"
---

I like puzzle hunts. If you have never heard of a puzzle hunt, [this
blog post](https://blog.vero.site/post/puzzlehunts) has an excellent,
fun-to-read introduction. Briefly, a puzzle hunt is a collection of
puzzles, each of which is a structured set of information provided
without instructions. For each puzzle, you must figure out what the
rules are and how to interpret the available information in order to
produce the answer, a word or short phrase.

After participating in a puzzle hunt with some friends in Summer 2020,
I decided to try making my own. I am quite happy with the result. I
tried very hard to make my puzzle hunt accessible to people who have
not solved puzzles before (so no [complicated
indexing](https://blog.vero.site/post/puzzlehunts#how-to-extract-the-answer)
is required, for example), and it is completely feasible to solve all
the puzzles by yourself (although solving with friends is always fun).

This page has links to each of the puzzles in my puzzle hunt, which
are provided in PDF format. There are nine in total, and one is a
[metapuzzle](https://blog.vero.site/post/puzzlehunts#how-to-solve-metapuzzles).
Figuring out *which* one is part of the metapuzzle :)

<div id="puzzles">
  <p><i>Puzzles are currently loading...</i></p>
</div>

<div id="modal">
  <div class="modal-overlay" id="modal-overlay"></div>
  <div class="modal-content">
    <h3 id="modal-puzzle-title">Puzzle title</h3>
    <hr class="puzzle">
    <p>
      You can check as many answers as you would like. Before an answer
      is checked, it will automatically be converted to uppercase and
      all non-alphabetical characters will be removed.
    </p>
    <div class="puzzle-submission">
      <input
        type="text"
        placeholder="Enter answer"
        class="puzzle-submission"
        id="answer-input"
      >
      <button type="button" id="puzzle-submit">Submit</button>
    </div>
    <div id="submissions">
    </div>
  </div>
</div>

Information about your submissions is only stored on your browser, and
never sent or saved anywhere else. In other words, answer verification
happens right in your browser, without even an Internet connection
required. (No, this doesn't mean you can just look at the website
source code and find out the puzzle answers. Unless you have a way of
cracking [modern cryptographic
protocols](https://en.wikipedia.org/wiki/Cryptography#Modern_cryptography),
anyway.) If you want to erase your submission information from your
browser, you can either clear your cookies or simply <a
href="javascript:void(0)" id="puzzle-reset">click here</a>.

<link href="/css/puzzles.css" rel="stylesheet">
<script src="/js/sjcl.js"></script>
<script src="/js/puzzles.js"></script>
