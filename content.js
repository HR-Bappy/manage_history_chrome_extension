

const insertTag = () => {
  
  const pathName=window.location.href
    const div = document.createElement("div");
    div.classList.add("btn-group");
      const body = document.getElementsByTagName('body')[0]
      let text = document.createElement("p");
      text.classList.add('history-extension-text')
      text.innerText='This page is visited already.'
}

// window.addEventListener("message", function(event) {
//   console.log('event',event.data.text);
//   if (event.source != window)
//       return;
//       console.log('event1',event);

//   if (event.data.type && (event.data.type == "FROM_PAGE")) {
//       console.log("Content script received message: " + event.data.text);
//   }
// });


chrome.storage.local.get(["key"]).then((result) => {
  let storedLink = result.key || [];
  let route =location.href;
  let tempRoute = route.split("/");
  let flag = false
  let temp = "://" + tempRoute[2]

    for (let i = 0; i < storedLink?.length; i++) {
      const div = document.createElement("div");
      div.classList.add("btn-group");
      div.classList.add("btn-group-" + i);
      if (storedLink[i].includes(temp)) {
        insertTag()
        flag=true
        break;
      }
      if(!flag){
        const insertedTag = document.querySelectorAll('btn-group')
        if(insertedTag[0])insertedTag[0]?.classList.add('d-none')
      }
    }
});