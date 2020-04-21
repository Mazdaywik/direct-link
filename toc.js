function makeTOC() {
  let tocstr =
    Array.from(document.querySelectorAll('h1 > a, h2 > a, h3 > a')).map((a) => (
      `<li>${a.parentNode.tagName} : <a href="${a.hash}">${a.parentNode.innerText.trim()}</a></li>`
    )).join('\n');

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = `<ul>${tocstr}</ul>`;
}

document.body.onload = makeTOC;
