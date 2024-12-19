function f() {
  const elem = document.querySelector("#wm-ipp-base");
  //console.log(elem);

  const root = chrome.dom?.openOrClosedShadowRoot(elem);
  //console.log(root);

  root.childNodes[0].querySelector("div#donato")?.remove()
}

setInterval(f, 1000);
