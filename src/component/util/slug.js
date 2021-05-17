export const getSlug = (term, add = false) =>
  String(term).replace(add ? " " : "-", add ? "-" : " ");
