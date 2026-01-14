import boxen from "boxen";

const title = "Hurray!!!";

// Classic
console.log(
  boxen("I am using my first external module!", {
    title,
    padding: 1,
  })
);

// SingleDouble
console.log(
  boxen("I am using my first external module!", {
    title,
    padding: 1,
    borderStyle: "singleDouble",
  })
);

// Round (EXACT example text)
console.log(
  boxen("unicorns love rainbows", {
    title,
    padding: 1,
    borderStyle: "round",
  })
);
