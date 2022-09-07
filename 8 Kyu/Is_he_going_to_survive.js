// each dragon needs 2 bullets to perish, how many bullets must you carry to kill them all...

function hero(bullets, dragons){
  return dragons*2>bullets ? false : true
}