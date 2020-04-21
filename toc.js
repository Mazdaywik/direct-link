function makeTOC() {
  let tocstr =
    Array.from(document.querySelectorAll('h1 > a, h2 > a, h3 > a')).map((a) => (
      let target = a.hash;
      let text = a.parentNode.innerHTML.trim();
      let escaped = text
        .replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;");

      `<li>
        ${a.parentNode.tagName} : <a href="${target}">${text}</a><br>
        ${escaped}, "${target}"
      </li>`
    )).join('\n');

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = `<ul>${tocstr}</ul>`;
}

document.body.onload = makeTOC;
