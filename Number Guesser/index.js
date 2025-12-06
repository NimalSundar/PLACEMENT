function anyguess() {
  let guess_no = Math.random() * 100;
  guess_no = Math.floor(guess_no);
  console.log(guess_no);

  let x = document.getElementById("guess").value;
  console.log(x);

  if (x == guess_no) {
    document.getElementById("res").innerHTML =
      "Congratulations! You guessed it right.";
  } else {
    document.getElementById("res").innerHTML =
      "Sorry! The correct number was " + guess_no + ". Try again!";
  }
}
