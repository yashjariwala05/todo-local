function newItem() {
  const todoItemID = `li-${Math.floor(Math.random() * 99) + Math.random().toString(20).substr(3, 4).toUpperCase()}`;
  var item = document.getElementById("input").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.setAttribute('id',todoItemID);

  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);

  const localdb = window.localStorage;
  const saveItem = new XMLSerializer().serializeToString(document.getElementById(todoItemID));
  //console.log(saveItem);
  localdb.setItem(todoItemID, saveItem);


  document.getElementById("input").value = "";
  li.onclick = removeItem;
}

document.body.onkeyup = function (e) {
  if (e.keyCode == 13) {
    newItem();
  }
};

function removeItem(e){
  //e.target.parentElement.removeChild(e.target);
  //trackItemCompletion(e); 
}

function loadLocalDBitems(){
  const localdb = window.localStorage;
  const list = document.querySelector('#list');
  //console.log(list);

  Object.keys(localdb).forEach((listitem) => {

    const newListitem = localdb.getItem(listitem);
    console.log(newListitem);
    const node = document.createRange().createContextualFragment(newListitem);
    list.appendChild(node);
  });
}

function trackItemCompletion(li) {
  //console.log(li);
  const listItem = e.target.getElementById(li.id);
  //console.log(listItem);
  if (listItem.checked) {
    listItem.setAttribute('checked', listItem.checked);
  } else {
    listItem.removeAttribute('checked');
  }
  const strListItem = new XMLSerializer().serializeToString(listItem);
 // console.log(strListItem);
  //const id = li.id;
  window.localStorage.setItem(li, strListItem);
}

loadLocalDBitems();