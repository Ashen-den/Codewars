function nameShuffler(str){
  return (str.slice(str.indexOf(" "))).trim() + " " + str.slice(0,str.indexOf(" "));
}