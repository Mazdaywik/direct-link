function makeTOC() {
  let prev_level = 1;
  let root = {
    href:"no level",
    parent: null,
    children: []
  };
  let parent = root;
  let last = null;

  document.querySelectorAll('h1 > a, h2 > a, h3 > a, h4 > a, h5 > a').forEach((a) => {
    const h = a.parentNode.tagName;
    const target = a.hash;
    const text = a.parentNode.innerHTML.toString().trim()
      .replace(/<a [^>]*>/g, "")
      .replace(/<\/a>/g, "");
    const level = 0 + h.substr(1);
    const href = `${h} : <a href="${target}">${text}</a>`;

    while (level > prev_level) {
      parent = last;
      last = {
        href: parent.href,
        parent: parent,
        children: Array.from(parent.children),
      };

      ++prev_level;
    }

    while (level < prev_level) {
      last = parent;
      parent = last.parent;

      --prev_level;
    }

    const node = {
      href: href,
      parent: parent,
      children: [],
    };
    parent.children.push(node);
    last = node;
  })

  let makelist = (children) => {
    children = children.map((tree) => (
      `<li>${tree.href}<br>${makelist(tree.children)}</li>`
    )).join('');

    if (children) {
      children = `<ul>${children}</ul>`;
    }

    return children;
  };
  let list = makelist(root.children);

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = list;
}

document.body.onload = makeTOC;
