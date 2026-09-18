const title = "ESLint test";

function buildPageTitle(label) {
  if (label.trim() === "") {
    return "Git Practice";
  }

  return `${label} | Git Practice`;
}

document.title = buildPageTitle(title);
