fetch('/.netlify/hallo')
    .then(resp => alert(resp.text()))
    .catch(err => console.log(err));
