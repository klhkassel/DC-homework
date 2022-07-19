//Hello you! part 1 + 2
function hello(name) {
  if (name == null) console.log("Hello, world!");
  else console.log("Hello, " + name) + "!";
}

hello("mustache");
hello();

//Madlib
function madLib(param1, param2) {
  return `${param1}'s favorite subject in school is ${param2}`;
}
console.log(madLib("Anushka", "art"));

//Tip calculator
function tipAmount(amount, service) {
  switch (service) {
    case "good":
      return amount * 0.2;
    case "fair":
      return amount * 0.15;
    case "bad":
      return amount * 0.1;
    default:
      return;
  }
}

console.log(tipAmount(10, "good"));
//total

function totalAmount(amount, service) {
  return tipAmount(amount, service) + amount;
}

console.log(totalAmount(50, "good"));

//bill split
function billSplit(people, service, amount) {
  return totalAmount(amount, service) / people;
}

console.log(billSplit(5, "good", 100));
