for (let i = 1 ; i < 101 ; i ++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("DealTap");
  } else if (i % 3 === 0) {
    console.log("PDF");
  } else if (i % 4 === 0) {
    console.log("Smart Form");
  } else {
    console.log(i);
  }
}