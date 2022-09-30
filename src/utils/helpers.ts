import { createGlobalState, useDark } from '@vueuse/core'

export const generateHTML = (
  payload: Record<string, any>,
  isDark?: boolean,
) => {
  return `<html class="${isDark ? '' : ''}">
        <head>
            <style id="_style">${payload.css}</style>
            <script type="module" id="_script">
              ${payload.javascript}
            </\script>
        </head>
        <body>
            ${payload.html}
        </body>
    </html>`
}

export const useDarkGlobal = createGlobalState(() => useDark())

export const initialEditorValue = {
  html: '<!DOCTYPE html>\n<html lang="en">\n\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <title>Demo</title>\n    <meta name="description" content="" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="icon" type="image/x-icon" href="favicon.ico">\n    <link rel="manifest" href="manifest.json" />\n    <!-- See, `style.css` -->\n  </head>\n\n  <body id="root">\n    <!-- See, `app.js` -->\n  </body>\n</html>',
  javascript: 'import {\n  craft, mount, unmount, render, design, toggleById,\n} from "https://unpkg.com/knott@0.1.9/knott.js";\n\nconst cssReset = "m:0 p:0 listStyle:none appearance:none";\n\const bodyStyle = "vHeight:100vh display:flex justifyContent:center alignItems:center fontFamily:ubuntu,sans,serif textColor:rgba(0,0,0,1) bgColor:white textSize:50";\nconst childStyle = "m:10 p:20 textColor:white bgColor:dimgrey curveRadius:10";\nconst flexCenter = "display:flex flexDirection:column justifyContent:center alignItems:center";\nconst buttonStyle = "pl:20 pr:20 pt:8 pb:8 textColor:black bgColor:lightgrey textSize:20 fontWeight:bold textTransform:uppercase curveColor:grey curveStyle:solid curveWidth:3 curveRadius:6 cursor:pointer";\n\nconst childComponent = (props1, props2) =>\n  craft("div", {\n    props: { class: `${flexCenter}`, },\n    html: `\n      <div>${props1}</div>\n      <button \n        class="${buttonStyle} mt:20"\n        id="clickEffect">\n        ${props2}\n      </button>`,\n    actions: [\n      ["add", "click", () => {\n        toggleById("childElem", [\n          "textColor:black", "bgColor:lightgrey", "transition:1s"\n        ]);\n      }],\n    ],\n  });\n\nconst rootVNode = () =>\n  craft("body", { // parent\n    props: {\n      id: "root",\n      class: `${cssReset} ${bodyStyle} flexDirection:column`,\n    },\n    text: "This is a body!",\n    expand: [ // child\n      craft("div", {\n        props: {\n          id: "childElem",\n          class: childStyle,\n        },\n        text: "Child element.",\n      }),\n      childComponent("Child Component.", "Click Me!"),\n    ],\n  });\n\nmount("root", render(rootVNode()));\n\ndesign(true); // init artis.js',
  css: '/*\n * Knott.js use Virtual CSS for styling without \n * additional CSS payload in your project.\n * Simply, No CSS! Pssst... It is a low-level one!\n * Fine-tuning the utility settings almost infinity.\n *\n * Read more about `Styling` topic at\n * https://knottjs.netlify.app/#styling\n *\n * Virtual CSS has enabled by default in this demo!\n */\n\n/*\n * Or, if you looking for intuitive functional and\n * low-level CSS framework, try out the `WEAVV CSS`.\n *\n * Read the documentation at\n * https://weavvcss.netlify.app\n *\n * Uncomment to use WEAVV CSS.\n */\n\n/* @import "https://unpkg.com/weavvcss@1.0.3/dist/weavv-1.0.3.min.css"; */',
}
