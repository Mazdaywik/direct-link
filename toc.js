let tocstr =
  '\n\n\n> **Table of contents**\n> \n' +
  Array.from(document.querySelectorAll('h1 > a, h2 > a, h3 > a')).map((a) => (
    {'H1':'> * ','H2':'>   * ','H3':'>     - '}[a.parentNode.tagName] +
    `[${a.parentNode.innerText.trim()}](${a.hash})`
  )).join('\n') +
  '\n\n\n'

let tocdiv = document.getElementById("toc");
tocdiv.innerHTML = tocstr;
