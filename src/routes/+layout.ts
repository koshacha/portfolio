// import { loadTranslations } from '$lib/translations';
/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
  const { pathname } = url;
  // const initLocale = 'en';
  // await loadTranslations(initLocale, pathname);
  return {
    url: pathname
  };
};

export const prerender = true;
// export const trailingSlash = 'always';
