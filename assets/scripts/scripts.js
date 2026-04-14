var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  document.getElementById("content_wrapper").classList.add("ltr_wrapper");

  // Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: globalData.email ? true : false,
        img: "../assets/images/icons/mail.png",
      },
      {
        name: globalData.googleScholar,
        active: globalData.googleScholar ? true : false,
        img: "../assets/images/icons/google-scholar.png",
      },
      {
        name: globalData.orcid,
        active: globalData.orcid ? true : false,
        img: "../assets/images/icons/orcid.png",
      },
      {
        name: globalData.linkedin,
        active: globalData.linkedin ? true : false,
        img: "../assets/images/icons/linkedin.png",
      },
      {
        name: globalData.github,
        active: globalData.github ? true : false,
        img: "../assets/images/icons/github.png",
      },
      {
        name: globalData.resume,
        active: globalData.resume ? true : false,
        img: "../assets/images/icons/resume.png",
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerText = enHomePageData.name;
    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText = enHomePageData.name;
    document.getElementById("home_job_title").innerText = enHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href="${link.name}" target="_blank"><img src="${link.img}" alt="${link.name}" /></a>
            </li>`
      )
      .join("");

    document.getElementById("home_title").innerText = enHomePageData.home_title;
    document.getElementById("home_content").innerHTML = enHomePageData.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // Research page data
  const setResearchData = (id, data) => {
    document.getElementById(id).innerHTML = data
      .map(
        (item) =>
          `
        <div class='publications_item'>
        <div class='publications_header'>
          ${
            item.writers.length > 0
              ? item.writers
                  .map((writer) => `<span>${writer}</span>`)
                  .join(", ")
              : ""
          }
          ${item.date ? `<span>(${item.date}).</span>` : ""}
          <h2>${item.title}</h2>
        </div>
        <p>${item.abstract}</p>
        <ul class='publications_footer'>
          ${
            item.link
              ? `<li>
                <a href="${item.link}" target="_blank">View</a>
              </li>`
              : ""
          }
          ${
            item.github
              ? `<li>
                  <a href="${item.github}" target="_blank">Github</a>
                </li>`
              : ""
          }
        </ul>
      </div>
     `
      )
      .join("");
  };

  function ResearchData() {
    document.getElementById("page_title").innerText = "Research";

    document.getElementById("publications_type_one_title").innerHTML =
      enResearchPageData.type_one_title;
    setResearchData(
      "publications_type_one_data",
      enResearchPageData.type_one_items
    );

    document.getElementById("publications_type_two_title").innerHTML =
      enResearchPageData.type_two_title;
    setResearchData(
      "publications_type_two_data",
      enResearchPageData.type_two_items
    );

    document.getElementById("publications_type_three_title").innerHTML =
      enResearchPageData.type_three_title;
    setResearchData(
      "publications_type_three_data",
      enResearchPageData.type_three_items
    );

    var fourTitle = enResearchPageData.type_four_title;
    if (fourTitle) {
      document.getElementById("publications_type_four_title").innerHTML = fourTitle;
      setResearchData(
        "publications_type_four_data",
        enResearchPageData.type_four_items
      );
    }
  }

  if (pathname === "/Research") {
    ResearchData();
  }

  // Teaching page data
  function TeachingData() {
    document.getElementById("page_title").innerText = "Teaching";
    document.getElementById("research_title").innerHTML = enTeachingPageData.title;
    document.getElementById("research_data").innerHTML = enTeachingPageData.content;
  }

  if (pathname === "/Teaching") {
    TeachingData();
  }

  // Work page data
  function WorkData() {
    document.getElementById("page_title").innerText = "Work Experience";
    document.getElementById("jobs_title").innerHTML = enWorkPageData.title;

    document.getElementById("jobs_data").innerHTML = enWorkPageData.items
      .map(
        (job) =>
          `<div class='job_item'>
            <div class='job_header'>
              <div>
                <h1>${job.title},</h1>
                <h2> ${job.company}</h2>
              </div>
              <div>
                <span>${job.startData} - ${job.endDate ? job.endDate : "Present"}</span>
                <span class='job_location'>${job.location}</span>
              </div>
            </div>
            <p>${job.abstract}</p>
            ${
              job.achievements.length > 0
                ? `<div>
                  <ul>
                    ${job.achievements
                      .map((achievement) => `<li>${achievement}</li>`)
                      .join("")}
                  </ul>
                </div>`
                : ""
            }
        </div>`
      )
      .join("");
  }

  if (pathname === "/Work") {
    WorkData();
  }

  // As I Am page data
  function AsIAmData() {
    document.getElementById("page_title").innerText = "As I Am";
    document.getElementById("asiam_title").innerHTML = enAsIAmPageData.title;
    document.getElementById("asiam_data").innerHTML = enAsIAmPageData.content;
  }

  if (pathname === "/as-i-am") {
    AsIAmData();
  }

  // Contact page data
  const contact_data = {
    contact_title: "Contact",
    contact_items: [
      {
        img: "../assets/images/icons/mail.png",
        title: globalData.email,
        active: globalData.email ? true : false,
      },
      {
        img: "../assets/images/icons/google-scholar.png",
        url: globalData.googleScholar,
        name: globalData.googleScholarTitle,
        active: globalData.googleScholar ? true : false,
      },
      {
        img: "../assets/images/icons/orcid.png",
        url: globalData.orcid,
        name: globalData.orcidTitle,
        active: globalData.orcid ? true : false,
      },
      {
        img: "../assets/images/icons/linkedin.png",
        url: globalData.linkedin,
        name: globalData.linkedinTitle,
        active: globalData.linkedin ? true : false,
      },
      {
        img: "../assets/images/icons/github.png",
        url: globalData.github,
        name: globalData.githubTitle,
        active: globalData.github ? true : false,
      },
    ],
  };

  function contactData() {
    document.getElementById("page_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_data").innerHTML =
      contact_data.contact_items
        .filter((item) => item.active)
        .map(
          (link) =>
            `<li>
              <img src="${link.img}" alt="${link.title || link.name}" />
              ${
                link.url
                  ? `<a href="${link.url}" target="_blank">
                      ${link.name ? link.name : link.url}
                    </a>`
                  : `<p>${link.title}</p>`
              }
            </li>`
        )
        .join("");
  }

  if (pathname === "/contact") {
    contactData();
  }
});
