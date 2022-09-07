const quarterOf = (month) => {
  switch(true){
      case month<4:
      return 1
      break;
      case month<7:
      return 2
      break;
      case month<10:
      return 3
      break;
      case month<13:
      return 4
      break;
  }
}