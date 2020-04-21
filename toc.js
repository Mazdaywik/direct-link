function makeTOC() {
  let prev_level = 1;
  let tree = { children: [] };
  let parent = tree;

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

      const href = `${h} : <a href="${target}">${text}</a>`;

      const node = {
        href: href,
        parent: parent,
        children: [],
      };
      parent.children.push(node);

      return diff + `<li>${href}<br></li>`
    }).join('\n');

  while (prev_level > 1) {
    tocstr += "</ul></li>";
    --prev_level;
  }

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = `<ul>${tocstr}</ul> ${tree}`;
}

document.body.onload = makeTOC;
