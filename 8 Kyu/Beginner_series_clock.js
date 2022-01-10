// timeFromMidnight calculates time since midnight in MS

function past(h, m, s){
  let timeFromMidnight = 0
  if(0 <= h && h <= 23 && 0 <=m && m <= 59 && 0 <=s && s <= 59){
    timeFromMidnight = (h*60*60*1000) + (m*60*1000) + (s*1000)
    return timeFromMidnight
  } else
  
  return 'invalid time'
}