
function superbowlWin(array) {
  let newA = array.find(function(ob) {
       if (ob.result === 'W') {
        return ob
       }
    })
    if (newA === undefined){ 
    return undefined }
    else {return newA.year}
}

// function superbowlWin(values, year) {
//   let winYear = values.find(function(ob) {
//     if ()
//   }
  
//   )


// }
