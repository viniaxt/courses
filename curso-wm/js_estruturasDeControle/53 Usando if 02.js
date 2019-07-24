function teste1(num) {
  if (num > 7) {
    console.log(num);
    console.log("final");
  }
}

teste1(6);
teste1(8);

function teste2(num) {
  if (num > 7) console.log(num); //Cuidado ao usar ;
  console.log("final");
}

teste2(6);
teste2(8);
