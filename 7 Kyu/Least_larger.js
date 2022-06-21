function leastLarger(a,i) {
  return a.findIndex(e=>e===Math.min(...a.filter(e=>e-a[i]>0)))
}