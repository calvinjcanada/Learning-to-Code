function nbYear(p0, percent, aug, p) {
    // Calculate the number of years needed to reach population "p"
    //p0 = starting population
    //percent = % of population growth (entered as a integer [must convert to percent number])
    //aug = number of people who steadily migrate to the new place [static growth unaffected by percentage]
    //p = final population
    
    //console.log('Start ' + p0);
    //console.log('Percentage ' + percent);
    //console.log('Population Increment ' + aug);
    //console.log('Final Population ' + p);
    
    let percentage = percent / 100;
    let population = p0;
    let year = 0;
    
    while(population < p)
    {
      //console.log("Year " + year);
      population += population * percentage;
      //console.log(population);
      population += aug;
      //console.log(population + " with aug");
      year++;
    }
    
    return year;
    
    //Perfect solution
    //function nbYear(p0, percent, aug, p) {
   //for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
   //return y;
}
}
