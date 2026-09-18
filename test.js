const title = "ESLint test";

function buildPageTitle(label) {
  if (label === "") {
    return "Git Practice";
  }

  return `${label} | Git Practice`;
}

document.title = buildPageTitle(title);
