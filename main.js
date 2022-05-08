fetch('https://kamaltest.netlify.app/.netlify/functions/hallo')
    .then(resp => resp.text())
    .then(res => alert(res))
    .catch(err => console.log(err));
