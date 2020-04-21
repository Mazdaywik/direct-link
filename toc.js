function makeTOC() {
  let prev_level = 1;
  let root = {
    href: null,
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
    const level = 1 * h.substr(1);
    const href = `${h} : <a href="${target}">${text}</a>`;

    if (! target) {
      return;
    }

    console.log(`h: ${h}, text: ${text}`);

    while (level > prev_level) {
      console.log(`level: ${level}, prev_level: ${prev_level}`);

      if (! last) {
        last = {
          href: parent.href,
          parent: parent,
          children: [],
        };
        parent.children.push(last);
      }

      parent = last;
      last = null;

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

  while (root.href == null && root.children.length == 1) {
    root = root.children[0];
  }

  let fixup_href = (tree) => {
    if (! tree.href) {
      tree.href = fixup_href(tree.children[0]);
    }

    return tree.href;
  };

  fixup_href(root);

  console.log(root.children);
  let list = makelist(root.children);

  let tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = list;
}

document.body.onload = makeTOC;
