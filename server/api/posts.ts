import aboba from "~/utils/aboba";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  let locale = `/${query.locale ?? "ru"}/anken`;

  locale = locale.replace("/ru", "");

  const pages = await queryCollection(event, "project")
    .select(
      "id",
      "title",
      "published",
      "sort",
      "path",
      "seoDescription",
      "tags",
      "image"
    )
    .where("path", "LIKE", `${locale}/%`)
    .where("published", "=", true)
    .order("sort", "DESC")
    .all();

  await aboba();

  return pages;
});
