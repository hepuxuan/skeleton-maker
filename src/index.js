import createSkeletonHTML from "draw-page-structure/evalDOM";

const copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

createSkeletonHTML({
  // background: "red",
  animation: "opacity 1s linear infinite;"
})
  .then(skeletonHTML => {
    console.log(skeletonHTML);
    copyToClipboard(skeletonHTML);
    alert("copied to clipboard");
  })
  .catch(e => {
    console.error(e);
  });
