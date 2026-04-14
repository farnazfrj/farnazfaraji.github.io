$(document).ready(function () {
  const navbar_data = {
    title: enNavbarData.title,
    navbar_links: [
      {
        active: navbarLinks.home ? true : false,
        title: enNavbarData.Home,
        url: "/",
      },
      {
        active: navbarLinks.Research ? true : false,
        title: enNavbarData.Research,
        url: "/Research.html",
      },
      {
        active: navbarLinks.Teaching ? true : false,
        title: enNavbarData.Teaching,
        url: "/Teaching.html",
      },
      {
        active: navbarLinks.Work ? true : false,
        title: enNavbarData.Work,
        url: "/Work.html",
      },
      {
        active: navbarLinks.AsIAm ? true : false,
        title: enNavbarData.AsIAm,
        url: "/as-i-am.html",
      },
      {
        active: navbarLinks.contact ? true : false,
        title: enNavbarData.Contact,
        url: "/contact.html",
      },
    ],
  };

  function navbarData() {
    document.getElementById("navbar_title").innerHTML = navbar_data.title;
    document.getElementById("navbar_title").href = "/";
    document.getElementById("navbar_links").innerHTML = navbar_data.navbar_links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li class="nav-item">
              <a
              ${
                window.location.pathname === link.url
                  ? "class='nav-link active'"
                  : "class='nav-link'"
              }
              href="${link.url}"
              >${link.title}</a>
            </li>`
      )
      .join("");
  }

  navbarData();
});
