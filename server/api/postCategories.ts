export default defineEventHandler(async (event) => {
  const pages = await queryCollection(event, "project")
    .select("tags")
    .where("published", "=", true)
    .where("tags", "IS NOT NULL")
    .all();

  const distinctTags = new Set(pages.map((page) => page.tags).flat());

  return ["", ...distinctTags];
});
