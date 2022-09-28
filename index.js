mainImageDiv = document.getElementsByClassName("mainImageDiv");
const grid = document.querySelector("#mainImage");
animateCSSGrid.wrapGrid(grid, { duration: 10000,easing: 'easeInOut' });
let selectedDiv = -1;
function selectDiv() {
  Array.from(mainImageDiv).forEach((div, index) => {
    div.addEventListener("mouseover", () => {
      selectedDiv = index;
      changeGridCol();
    });
  });
}
function changeGridCol() {
  let val = 0;
  // flag for index==0
  let flag = false;
  Array.from(mainImageDiv).forEach((div, index) => {
    div.firstElementChild.children[1].style.visibility = "visible";
    if (index == selectedDiv) {
      if (flag) {
        div.style.gridColumn = `${val}/${val + 2}`;
        val = val + 2;
      } else {
        div.style.gridColumn = `${val + 1}/${val + 3}`;
        val = val + 3;
      }
    } else {
      div.firstElementChild.children[1].style.visibility = "hidden";
      if (flag) {
        div.style.gridColumn = `${val}/${val + 1}`;
        val = val + 1;
      } else {
        div.style.gridColumn = `${val + 1}/${val + 2}`;
        val = val + 2;
      }
    }
    flag = true;
  });
}
selectDiv();
