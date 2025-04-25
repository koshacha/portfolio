export default async function aboba(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
