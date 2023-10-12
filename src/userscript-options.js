const OPTIONS_HTML = `

__OPTIONS_HTML__

`

const OPTIONS_CSS = `

__OPTIONS_CSS__

`

const OPTIONS_JS = `

__OPTIONS_JS__

`

function showOptions(){
    const CONTAINER_ID = 'webNavigatorIframe';
    if (document.getElementById(CONTAINER_ID)){
        document.getElementById(CONTAINER_ID).remove();
    }
    const iframe = document.createElement('iframe');
    const iframe_container = document.createElement('div');

    iframe_container.id = CONTAINER_ID;
    iframe_container.onclick = () => {
        iframe_container?.remove();
    }
    iframe.onclick = (e) => {
        e.stopPropagation();
    }
    iframe.srcdoc = OPTIONS_HTML;
    Object.assign(iframe_container.style, {
        position: 'fixed',
        display: 'grid',
        cursor: 'pointer',
        placeItems: 'center',
        inset: 0,
        backgroundColor: '#0003',
        zIndex: 100000,
    })
    iframe_container.appendChild(iframe);
    Object.assign(iframe.style, {
        width: '80vw',
        height: '80vh',
        border: 'none',
        borderRadius: '3px',
        overflow: 'hidden',
        background: '#fff',
    })
    document.body.appendChild(iframe_container);
    return {el: iframe, container: iframe_container}
}

showOptions();