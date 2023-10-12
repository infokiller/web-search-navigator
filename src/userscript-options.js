const OPTIONS_HTML = atob(`

__OPTIONS_HTML__

`.replaceAll('\n', ''));

const OPTIONS_CSS = atob(`

__OPTIONS_CSS__

`.replaceAll('\n', ''));

const OPTIONS_JS = atob(`

__OPTIONS_JS__

`.replaceAll('\n', ''));

const OPTIONS_PAGE_JS = atob(`

__OPTIONS_PAGE_JS__

`.replaceAll('\n', ''));

const BROWSER_POLYFILL_JS = atob(`

__BROWSER_POLYFILL_JS__

`.replaceAll('\n', ''));

function showOptions() {
  const CONTAINER_ID = "webNavigatorIframe";
  if (document.getElementById(CONTAINER_ID)) {
    document.getElementById(CONTAINER_ID).remove();
  }
  const iframe = document.createElement("iframe");
  const iframe_container = document.createElement("div");

  iframe_container.id = CONTAINER_ID;
  iframe_container.onclick = () => {
    iframe_container?.remove();
  };
  iframe.onclick = (e) => {
    e.stopPropagation();
  };

  const BETTER_STYLES = `
  
  body {padding: 30px; max-width: 600px; margin: 0 auto;}
  * {box-sizing: border-box; padding: 0; margin: 0; font-family: sans-serif;}
  h1, h2, h3 {font-weight: 100;}

  `
  const OUT_HTML = OPTIONS_HTML
    .replaceAll(`<script src="options.js"></script>`, `<script>\n\n${OPTIONS_JS}\n\n</script>`)
    .replaceAll(`<script src="options_page.js"></script>`, `<script>\n\n${OPTIONS_PAGE_JS}\n\n</script>`)
    .replaceAll(`<script src="browser-polyfill.js"></script>`, `<script>\n\n${BROWSER_POLYFILL_JS}\n\n</script>`)
    .replaceAll(`<link rel="stylesheet" href="options_page.css">`, `<style>\n\n${BETTER_STYLES}\n\n${OPTIONS_CSS}\n\n</style>`);

  console.log({OUT_HTML});
  iframe.srcdoc = OUT_HTML;
  Object.assign(iframe_container.style, {
    position: "fixed",
    display: "grid",
    cursor: "pointer",
    placeItems: "center",
    inset: 0,
    backgroundColor: "#0003",
    zIndex: 100000,
  });
  iframe_container.appendChild(iframe);
  Object.assign(iframe.style, {
    width: "80vw",
    height: "80vh",
    border: "none",
    borderRadius: "3px",
    overflow: "hidden",
    background: "#fff",
  });
  document.body.appendChild(iframe_container);
  return { el: iframe, container: iframe_container };
}

// TODO: Make the options page use postMessage to parent and localStorage to utilize settings

function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      resolve(reader.result);
    };
    reader.onerror = function (e) {
      reject(reader.error);
    };
    reader.onabort = function (e) {
      reject(new Error("Read aborted"));
    };
    reader.readAsDataURL(blob);
  });
}
