function isNodeEnv() {
  return !(typeof window != "undefined" && window.document);
}

const USER_LANGUAGE = (function () {
  if (isNodeEnv()) {
    return "empty language";
  } else {
    return navigator.language;
  }
})();

function obtainSupportLanguages(siteData) {
  const languageRouteMap = new Map();
  for (const routePath in siteData.value.locales) {
    if (
      Object.prototype.hasOwnProperty.call(siteData.value.locales, routePath)
    ) {
      const element = siteData.value.locales[routePath];
      if (element.lang) {
        languageRouteMap.set(routePath, element.lang);
      }
    }
  }
  return languageRouteMap;
}

function getRedirectUrlFromUserLanguage(userLanguage, languageRouteMap) {
  let path = null;

  languageRouteMap.forEach((language, routePath) => {
    if (isSameLanguage(userLanguage, language)) {
      path = routePath;
      /*console.log(
        `matched language is ${language}, route path is ${routePath}`
      );*/
    }
  });

  return path;
}

function isSameLanguage(target, compared) {
  if (target === compared) {
    return true;
  }

  const targetPrefix = getLanguagePrefix(target);
  const comparedPrefix = getLanguagePrefix(compared);

  return targetPrefix === comparedPrefix;
}

function getLanguagePrefix(language) {
  return language.split("-")[0];
}

export const localeRedirect = (router, siteData) => {
  let supportLanguages = obtainSupportLanguages(siteData);

  if (supportLanguages.size == 0) {
    return;
  }

  router.beforeEach((to, from) => {
    let isFirstStart = to.fullPath == from.fullPath;
    //console.log(`isFirstBoot ${isFirstStart}`);

    let isHome = to.fullPath == "/";
    //console.log(`isHome ${isHome}`);

    if (isFirstStart && isHome) {
      let redirectUrl = getRedirectUrlFromUserLanguage(
        USER_LANGUAGE,
        supportLanguages
      );

      // to avoid loop redirect, check redirectUrl is same as "to" first.
      if (redirectUrl && to.fullPath != redirectUrl) {
        /*console.log(
          `current language ${USER_LANGUAGE}, try to redirectUrl is ${redirectUrl}`
        );*/
        return redirectUrl;
      } else {
        /*console.log(
          `current language ${USER_LANGUAGE}, is matched default language, do nothing.`
        );*/
      }
    }
  });
};
