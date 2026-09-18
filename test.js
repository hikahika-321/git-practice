const title = "ESLint test";
const PAGE_TITLE_SUFFIX = "Git Practice";

function buildPageTitle(label) {
  if (label.trim() === "") {
    return PAGE_TITLE_SUFFIX;
  }

  return `${label} | ${PAGE_TITLE_SUFFIX}`;
}

document.title = buildPageTitle(title);
