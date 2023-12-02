 var allowedDomains = [
  "https://smartfoloolol.pages.dev/tag"
  "https://khanacademy.pages.dev",
  "https://lightspeedsystems.pages.dev",
  "https://lightspeedsystems.onrender.com",
  "https://lightspeedsystems.netlify.app",
  "https://enrichingstudents.onrender.com/",
  "https://platformerio.pages.dev",
  "https://nates-cdn.pages.dev",
  "https://platformer-io-7az7.onrender.com",
  "https://enrichingstudents.vercel.app",
  "https://precious-snickerdoodle-03da77.netlify.app",
  "https://genuine-tartufo-2641a6.netlify.app",
  "https://mellifluous-muffin-002487.netlify.app",
  "https://extraordinary-faun-286888.netlify.app",
  "https://main--vocal-tapioca-5fc81e.netlify.app",
  "https://linkd.w3spaces.com",
  "https://linkd1.github.io/linkd1"
];

var referringUrl = document.referrer;

var isAllowedDomain = allowedDomains.some(function (domain) {
  return referringUrl.indexOf(domain) !== -1;
});

if (!isAllowedDomain) {
  window.location.href = allowedDomains[0];
}