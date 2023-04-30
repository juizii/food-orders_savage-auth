var completed = document.getElementsByClassName("yes");
var pending = document.getElementsByClassName("no");
var trash = document.getElementsByClassName("fa-dumpster-fire");

Array.from(completed).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[3].innerText
        const orders = this.parentNode.parentNode.childNodes[5].innerText
        const completed = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'orders': orders,
            'completed':completed
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(pending).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log("i will die??")
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const orders = this.parentNode.parentNode.childNodes[5].innerText
    const completed = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
    
  fetch('messages/pending', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'orders': orders,
        'completed':completed
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[3].innerText
        const orders = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'orders': orders
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
