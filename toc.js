function makeTOC() {
  let tocstr =
    '\n\n\n> **Table of contents**\n> \n' +
    Array.from(document.querySelectorAll('h1 > a, h2 > a, h3 > a')).map((a) => (
      `<p> ${a.parentNode.tagName} : ${a.parentNode.innerText.trim()} ~ ${a.hash} </p>`
    )).join('\n') +
    '\n\n\n'

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = "<pre>" + tocstr + "</pre>";
}

makeTOC();
