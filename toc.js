function makeTOC() {
  let tocstr =
    Array.from(document.querySelectorAll('h1 > a, h2 > a, h3 > a, h4 > a, h5 > a')).map((a) => {
      let h = a.parentNode.tagName;
      let target = a.hash;
      let text = a.parentNode.innerHTML.trim();

      let level = 0 + h.substr(1);

      return `<li>
        ${h} : <a href="${target}">${text}</a><br>
        "${target}", ${level * 10}
      </li>`
    }).join('\n');

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = `<ul>${tocstr}</ul>`;
}

document.body.onload = makeTOC;
