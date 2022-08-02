const showNumbers = function(start, end) {
  let  count = start;
  const hackInterval = setInterval(function() {
     if (count == end) {
       clearInterval(hackInterval);
       }
      console.log(count);
      count++;
  }, 1000);
}

showNumbers(5,15);