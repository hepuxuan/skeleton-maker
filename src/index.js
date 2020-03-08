import createSkeletonHTML from "./evalDOM";

const copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

createSkeletonHTML({
  background: "#f2f2f2",
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
