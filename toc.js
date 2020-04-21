function makeTOC() {
  let tocstr =
    Array.from(document.querySelectorAll('h1 > a, h2 > a, h3 > a')).map((a) => (
      `<p> ${a.parentNode.tagName} : ${a.parentNode.innerText.trim()} ~ ${a.hash} </p>`
    )).join('\n');

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = tocstr;
}

document.body.onload = makeTOC;
