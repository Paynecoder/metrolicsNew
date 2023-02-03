function openTOA(thingsofabove__Opening) {
  if (
    document.getElementById("thingsofabove__Content" + thingsofabove__Opening)
      .style.display == "inline-block"
  ) {
    document.getElementById(
      "thingsofabove__Content" + thingsofabove__Opening
    ).style.display = "none";
    document.getElementById(
      "thingsofabove__Title" + thingsofabove__Opening
    ).style.backgroundColor = "#fff";
    document.getElementById(
      "thingsofabove__Title" + thingsofabove__Opening
    ).style.color = "#626262";
    document.getElementById(
      "thingsofabove__" + thingsofabove__Opening
    ).innerHTML = "+";
  } else {
    document.getElementById(
      "thingsofabove__Content" + thingsofabove__Opening
    ).style.display = "inline-block";
    document.getElementById(
      "thingsofabove__Title" + thingsofabove__Opening
    ).style.backgroundColor = "#19b2de";
    document.getElementById(
      "thingsofabove__Title" + thingsofabove__Opening
    ).style.color = "#fff";
    document.getElementById(
      "thingsofabove__" + thingsofabove__Opening
    ).innerHTML = "-";
  }
}

function highlightTOA(thingsofabove__Hover) {
  if (
    document.getElementById("thingsofabove__Content" + thingsofabove__Hover)
      .style.display == "inline-block"
  ) {
    document.getElementById(
      "thingsofabove__Title" + thingsofabove__Hover
    ).style.color = "#fffff";
  } else {
    document.getElementById(
      "thingsofabove__Title" + thingsofabove__Hover
    ).style.color = "#626262";
  }
}

function tabOut(tabNo) {
  for (i = 1; i < 4; i++) {
    document.getElementById("tab" + i).style.backgroundColor = "#f8f8f8";
  }
  document.getElementById("tab" + tabNo).style.backgroundColor = "#fff";
}
