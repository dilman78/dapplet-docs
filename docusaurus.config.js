module.exports = {
  title: "Documentation | Dapplets Platform",
  tagline: "Welcome to the Dapplets",
  url: "https://docs.dapplets.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "Dapplets", // Usually your GitHub org/user name.
  projectName: "dapplet-extension", // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    sidebarCollapsible: true,
    prism: {
      theme: require("./src/theme/custom-theme-code"),
    },
    navbar: {
      items: [
        // {
        //   type: 'localeDropdown',
        //   position: 'left',
        // },
        {
          to: "https://dapplets.org/",
          label: "Home",
          position: "right",
          className: "home-hover-menu",
        },
        {
          href: "https://forum.dapplets.org/",
          label: "Forum",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        // 1 Coll
        {
          title: "Home",
          items: [
            {
              label: "What is Dapplets Project?",
              href: "https://dapplets.org/#what-is",
            },
            {
              label: "Innovation",
              href: "https://dapplets.org/#innovation",
            },
            {
              label: "How to use it?",
              href: "https://dapplets.org/#to-use",
            },
            {
              label: "Role model",
              href: "https://dapplets.org/#economic",
            },
          ],
        },

        // 2 Coll
        {
          title: "Join Us",
          items: [
            {
              label: "Owner ",
              href: "https://dapplets.org/join-us.html#owner",
            },
            {
              label: "Lister",
              href: "https://dapplets.org/join-us.html#lister",
            },
            {
              label: "Developer",
              href: "https://dapplets.org/join-us.html#auditors",
            },
            {
              label: "Auditor",
              href: "https://dapplets.org/join-us.html#auditors",
            },
          ],
        },

        // 4 Coll
        {
          title: "About Dapplets",
          items: [
            {
              label: "Our Mission ",
              href: "https://dapplets.org/about.html#mission",
            },
            {
              label: "Motivation",
              href: "https://dapplets.org/about.html#motivation",
            },
            {
              label: "Career at Dapplets",
              href: "https://dapplets.org/about.html#career",
            },
          ],
        },

        // 5 Coll
        {
          title: "Forum",
          items: [
            {
              label: "Forum Dapplets",
              href: "https://forum.dapplets.org",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/dapplets/dapplet-docs/blob/master/",
        },
        theme: {
          customCss: require.resolve("./src/scss/custom.scss"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-fontloader"],
  ssrTemplate: `<!DOCTYPE html>
<html <%~ it.htmlAttributes %>>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="Docusaurus v<%= it.version %>">
    <% if (it.noIndex) { %>
      <meta name="robots" content="noindex, nofollow" />
    <% } %>
    <%~ it.headTags %>
    <% it.metaAttributes.forEach((metaAttribute) => { %>
      <%~ metaAttribute %>
    <% }); %>
    <% it.stylesheets.forEach((stylesheet) => { %>
      <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />
    <% }); %>
    <% it.scripts.forEach((script) => { %>
      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
    <% }); %>
  </head>
  <body <%~ it.bodyAttributes %>>
    <script type="text/javascript">
    (function(window, document, dataLayerName, id) {
    window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
    function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
    var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
    var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
    tags.async=!0,tags.src="https://dapplets.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
    !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
    })(window, document, 'dataLayer', '9bed06dd-be95-40d0-aea8-cf1e92ac2643');
    </script>
    <%~ it.preBodyTags %>
    <div id="__docusaurus">
      <%~ it.appHtml %>
    </div>
    <% it.scripts.forEach((script) => { %>
      <script src="<%= it.baseUrl %><%= script %>"></script>
    <% }); %>
    <%~ it.postBodyTags %>
  </body>
</html>`,
  // i18n: {
  //   defaultLocale: 'ENG',
  //   locales: ['ENG']
  // }
};
