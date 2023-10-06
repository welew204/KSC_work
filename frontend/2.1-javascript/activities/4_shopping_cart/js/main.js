let lettuceCount = 0;
let tomatoCount = 0;
let oatCount = 0;

function buyThing(thing) {
  console.log(`${thing} is getting added to cart`);
  let count = 0;
  if (thing == "lettuce") {
    lettuceCount += 1;
    count = lettuceCount;
  } else if (thing == "tomato") {
    tomatoCount += 1;
    count = tomatoCount;
  } else if (thing == "oat") {
    oatCount += 1;
    count = oatCount;
  }

  let itemCountSpan = document.querySelector(`#${thing}-count`);
  itemCountSpan.textContent = count;
}

function displayReceipt() {
  let items = { lettuce: lettuceCount, tomato: tomatoCount, oat: oatCount };
  console.log("displaying receipt");
  let receiptText = "Current items in cart:";
  let total = 0;
  let item_key_list = Object.keys(items);
  console.log(typeof item_key_list);
  for (let i of item_key_list) {
    console.log(items[i]);
    if (items[i] == 0) {
      continue;
    }
    console.log("k, iterating through items of....", i);
    let cpi = 5;
    if (i == "lettuce") {
      cpi = 10;
    } else if (i == "tomato") {
      cpi = 8;
    } else if (i == "oat") {
      cpi = 8;
    }
    let itemText = `\n - ${i}s, qty: ${items[i]} ... $${cpi * items[i]}`;
    receiptText += itemText;
    total += cpi * items[i];
  }
  receiptText += `\n\n --> Your total today is ... $${total}\n ***** Thanks for shopping with us today! *****`;
  alert(receiptText);
}
