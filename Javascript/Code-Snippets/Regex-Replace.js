function songDecoder(song){
  //Takes in a "dub-step string" (has a non-zero amount of WUBs inserted)
  //All-uppercase
  
  //Objectives
  //Removes the WUBs to reveal the orignal sentence
  //Single WUBs should be replaced by 1 space
  //Multiple WUBs should be replaced by 1 space
  //Heading or trailing WUBs should be removed
  
  //Match if begins or ends with a WUB, remove them
  //^ = begins with
  //$ = ends with
  let edge_re = /^WUB|WUB$/g;
  
  //Match WUB or WUBWUB, replace with a single space
  //+ = 1 or more instances
  //g = replace all
  let re = /(WUB)+/g;
  
  console.log(song + "0");
  
  //Get rid of trailing WUBs
  let remove_edges = song.replace(edge_re, "");
  console.log(remove_edges + "1");
  
  //Replace WUBs in the middle of the word
  let replace_wubs = remove_edges.replace(re, " ");
  console.log(replace_wubs + "2");
  
  return replace_wubs.trim();
  
  //Best solution
  // return song.replace(/(WUB)+/g," ").trim()
}
