function makeTOC() {
  let prev_level = 1;
  let tocstr =
    Array.from(document.querySelectorAll('h1 > a, h2 > a, h3 > a, h4 > a, h5 > a')).map((a) => {
      const h = a.parentNode.tagName;
      const target = a.hash;
      const text = a.parentNode.innerHTML.trim();
      const level = 0 + h.substr(1);

      let diff = "";

      while (level > prev_level) {
        diff += "<li><ul>";
        ++prev_level;
      }

      while (level < prev_level) {
        diff += "</ul></li>";
        --prev_level;
      }

      return diff + `<li>${h} : <a href="${target}">${text}</a><br></li>`
    }).join('\n');

  while (prev_level > 1) {
    tocstr += "</ul></li>";
    --prev_level;
  }

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = `<ul>${tocstr}</ul>`;
}

document.body.onload = makeTOC;
