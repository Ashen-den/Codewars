function printerError(s) {
    let error = "nopqrstuvwxyz".split('')
    return `${s.split('').filter(e=>error.indexOf(e)!=-1).length}/${s.length}`
}