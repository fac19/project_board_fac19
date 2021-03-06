// const script = require("../public/fetchAPI");

function sharedContent(content, loggedIn) {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FAC19 Project Board</title>
        <link rel="stylesheet" href="./public/styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav class="navbar">
          <div class="navbar__logo"><img class="navbar__logoIMG" src="./public/img/fac19.jpeg"></div>
          <div class="navbar__links" aria-expanded="false">
            <button class="navbar__links__menuButton"><span aria-hidden>☰</span> MENU</button>
          </div>
          <div class="navbar_toggleMenu hidden">
            <h3>Learning outcome</h3>
            <ul>
              <li><a class="navbar__links--link" href="#">HTML/CSS</a></li>
              <li>
                <a class="navbar__links--link" href="#">Fetch/API's/A'sync</a>
              </li>
              <li>
                <a class="navbar__links--link" href="#"
                  >DOM manipulation</a
                >
              </li>
              <li><a class="navbar__links--link" href="#">Node Servers</a></li>
              <li><a class="navbar__links--link" href="#">PosgreSQL</a></li>
              <li>
                <a class="navbar__links--link" href="#">Authentication</a>
              </li>
              <li><a class="navbar__links--link" href="#">RESTful API</a></li>
              <li>
                <a class="navbar__links--link" href="#">Full-Stack App</a>
              </li>
            </ul>
            <hr />
            <h3>admin</h3>
            <ul>
              <li>${authNavLinksDisplay(loggedIn)}</li>
              <li><a class="navbar__links--link" href="addRepo">Add New</a></li>
            </ul>
          </div>
        </nav>

        <header class="header">
          <h1 class="header__title">Project Gallery</h1>
          <h3 class="header__subtitle">Founders And Coders FAC19</h3>
          <p class="header__intro">"Founders and Coders is not your ordinary coding bootcamp.". We learn from other grads as well as from each other. 
          The program has been carefully crafted by industry experts to deliver job-ready junior developers.  Every week we're tasked with a different project. 
          Given user stories and acceptance criteria we have 1.5 days to deliver results. Each group is made of 3 members and a ScrumMaster. We use agile methodology 
          in planning and execution with a strong focus on kanban boards but often experiment with other available tools. </p>
          <div class="header__divider"></div>
        </header>

        <div class="container">
          ${content}
        </div>

        <footer class="footer">
        <p>&copy; this site was developed with ❤️ by: <a href="https://github.com/tacotoemeck" class="footer__link">TomW</a> </p>
        </footer>

        <template id="projectCardTemplate">
          <div class="projectCard">
            <h3 class="projectCard_week"></h3>
            <h3 class="projectCard_title"></h3>
            <div class="projectCard_image_div"></div>
            <div class="projectCard_imageLink_description" id="image_link_description">Click on user's image to visit their github profile.</div>
            <div class="projectCard_colaborators" aria-describedby="image_link_description"></div>
            <a class="projectCard_github" href="">SEE PROJECT'S REPO</a>
          </div>
        </template>
        <script src="./public/formValidator.js"></script>
        <script src="./public/script.js"></script>
        <script src="./public/toggleMenu.js"></script>
      </body>
    </html>
  `;
}

function mainPageContent(projects_array, authorized) {
  return `
    <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 1</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
        HTML/CSS
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array
          .map((project) => {
            if (project.week === "1") {
              return showProject(project, authorized);
            }
          })
          .join("")}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 2</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
        Fetch/API's/A'sync
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array
          .map((project) => {
            if (project.week === "2") {
              return showProject(project, authorized);
            }
          })
          .join("")}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 3</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
        DOM manipulation/Tests
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array
          .map((project) => {
            if (project.week === "3") {
              return showProject(project, authorized);
            }
          })
          .join("")}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 4</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
        Node Servers
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array
          .map((project) => {
            if (project.week === "4") {
              return showProject(project, authorized);
            }
          })
          .join("")}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 5</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
        PosgreSQL
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array
          .map((project) => {
            if (project.week === "5") {
              return showProject(project, authorized);
            }
          })
          .join("")}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 6</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
        Authentication
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array
          .map((project) => {
            if (project.week === "6") {
              return showProject(project, authorized);
            }
          })
          .join("")}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 7</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
        RESTful API
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array
          .map((project) => {
            if (project.week === "7") {
              return showProject(project, authorized);
            }
          })
          .join("")}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 8</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
        Full-Stack App
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array
          .map((project) => {
            if (project.week === "8") {
              return showProject(project, authorized);
            }
          })
          .join("")}
        </div>
      </section>
    `;
}

function mainPageDisplay(project_object, loggedIn) {
  return sharedContent(mainPageContent(project_object, loggedIn), loggedIn);
}

// genereate projects

function showProject(project_object, authorized) {
  return `
    <div class="projectCard">
    <h3 class="projectCard_title">${project_object.project_name}</h3>
    <img class="projectCard_image" src=${project_object.project_screenshot}/>
    <div class="projectCard_imageLink_description" id="image_link_description">Click on user's image to visit their github profile.</div>
    <div class="projectCard_colaborators">${JSON.parse(
      project_object.collaborators
    )
      .map((collaborator) => showCollaborators(collaborator))
      .join("")}</div>
    <a class="projectCard_github" href=${
      project_object.project_link
    }>SEE PROJECT'S REPO</a>
    ${displayDeleteButtonForAdminOnly(project_object.id, authorized)}
  </div>
    `;
}

function showCollaborators(collaborator) {
  return `<div class="projectCard_colaborators--div">
 
  <a href=${collaborator.github_link} class="projectCard_colaborators--link"> 
  <img src=${collaborator.github_img} class="projectCard_colaborators--image"/>
  </a>
  </div>`;
}

// form page

function showFormPage() {
  return sharedContent(formFetchPage());
}

function formFetchPage() {
  return `
  <div class="ProjectsForm">
  <form class="ProjectsForm__form" id="projectNameForm">
      <label for="project_name">Repository name:<span aria-hidden="true">*</span></label>
      <div id="repositoryNameRequirements" class="ProjectsForm__form__requirements">Please make sure the spelling and letter sizes are EXACTLY the same as github repo title!</div>
      <input id="project_name" name="project_name" placeholder="enter EXACT spelling from your github repo" aria-describedby="repositoryNameRequirements" required>
      <div id="project_name--error"></div>
      <button class="form__button" id="projectNameForm__submit" type="submit">FETCH</button>
  </form>
  <form class="ProjectsForm__form hiddenForm" id="projectScreenshootForm">
      <label for="project_img">Add URL:<span aria-hidden="true">*</span></label>
      <div id="screenshotNameRequirements" class="ProjectsForm__form__requirements">Please enter valid URL path of your screenshoot</div>
      <input id="project_img" name="project_img" placeholder="add screenshoot URL" aria-describedby="screenshotNameRequirements" minlength="4" required>
      <div id="project_img--error"></div>
      <button class="form__button" id="projectScreenshootForm__submit" type="submit">ADD IMAGE</button>
  </form>
  <form class="ProjectsForm__form hiddenForm" id="projectAddWeekForm">
      <label for="project_week">Add URL:<span aria-hidden="true">*</span></label>
      <div id="screenshotNameRequirements" class="ProjectsForm__form__requirements">Please enter the week when project was completed</div>
      <input id="project_week" name="project_week" placeholder="what week? - must be a number!" aria-describedby="screenshotNameRequirements" required >
      <div id="project_week--error"></div>
      <button class="form__button" id="projectAddWeektForm__submit" type="submit" >ADD WEEK</button>
  </form>
  <div class="weekProjectDisplay_projectBoard"></div>
  <button id="add_project_button" disabled>ADD!</button>
</div>

`;
}

function loginPage(message, loggedIn) {
  return sharedContent(
    `
      <form class="loginForm" action="login" method="POST">
        <h2 class="form">Admin login</h2>
        <label for="login_username"> Username:  <span aria-hidden="true">*</span> </label>
        <input
          id="login_username"
          name="login_username"
          placeholder="Username please"
          required
        />
        <label for="login_password"> Password:<span aria-hidden="true">*</span> </label>
        <input
          id="login_password"
          name="login_password"
          placeholder="Hidden password, I see you..."
          type="password"
          required
        />
        <div id="loginForm--error" class="form_validation_fail">${
          message || ""
        }</div>
        <button class="form__button" type="submit">
          login </button> </form >
        </button>
      </form>
      <a href="/" class="navbar__links" aria-label="Go back to Home">Home</a>`,
    loggedIn
  );
}

function authNavLinksDisplay(authorized) {
  if (authorized) {
    return `
    <a class="navbar__links--link" href="/logout">Logout</a>
    `;
  } else {
    return `
    <a class="navbar__links--link" href="/login">Login</a>
    `;
  }
}

function displayDeleteButtonForAdminOnly(id, authorized) {
  if (authorized) {
    return ` <form  action="/delete-project?id=${id}" method="POST">
    <input class="projectCard__delete_button" aria-label="delete this project" type="submit" value="🗑️" />
    </form>`;
  } else return "";
}

module.exports = {
  sharedContent,
  mainPageDisplay,
  showFormPage,
  loginPage,
};
