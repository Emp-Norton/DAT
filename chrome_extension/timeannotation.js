
const updateTimeAnnotation = () => {
  // Select all elements of "time" tag and loop over them
  document.querySelectorAll('time').forEach((el) => {
    // select the parent node, should be a cell in the table with a relative-to-now timestamp
    let parent = el.parentNode;
    // set the innertext to a local time string for absolute time of submission. The multiply by 1 converts the unix timestamp from a string to int, otherwise it screams about invalid date.
    parent.innerText = new Date(el.dateTime * 1).toLocaleTimeString();
  })
}

