document.querySelectorAll('time').forEach((el) => {
  let parent = el.parentNode;
  parent.innerText = new Date(el.dateTime * 1).toLocaleTimeString();
})
