

const codingProjects = [
  {
    projectName: "eDateBook",
    projectDescription: "Keep track of your contacts and export to excel as well as a functional calendar to keep track of events",
    githubRepo: "https://github.com/kikaiaku/edatebook",
    githubSite: "https://secret-citadel-74541.herokuapp.com",
    images: "assets/images/eDateBook.JPG"
  },

  {
    projectName: "Employee Tracker",
    projectDescription: "Tool to create, track and manage employees of a company",
    githubRepo: "https://github.com/gfy613/employee_tracker",
    githubSite: "https://drive.google.com/file/d/1hgSpVkxkDOaDNn5JL9D7FhTd-40pyyqN/view",
    images: "assets/images/employee_tracker.JPG"
  },
  {
    projectName: "Password Generator",
    projectDescription: "Generates a password between 8-126 characters. User can choose to use upper and lower case letters, numbers, or special characters.",
    githubRepo: "https://github.com/gfy613/password_generator",
    githubSite: "https://gfy613.github.io/password_generator/",
    images: "assets/images/password_generator.JPG"
  },
  {
    projectName: "Code Quiz",
    projectDescription: "Created a timed quiz that cycles through a series of questions about javascript. If the user gets a question correct it increases the score and if they get it wrong they loose 10 seconds. Uses local storage to record and show past highscores.",
    githubRepo: "https://github.com/gfy613/code_quiz",
    githubSite: "https://gfy613.github.io/code_quiz/",
    images: "assets/images/code_quiz.JPG"
  },
  {
    projectName: "Day Planner",
    projectDescription: "Creates a day planner for a user to keep track of their day. Saves tasks to local storage and formats each hour based on the time of day.",
    githubRepo: "https://github.com/gfy613/day_planner",
    githubSite: "https://gfy613.github.io/day_planner/",
    images: "assets/images/day_planner.JPG"
  },
  {
    projectName: "Weather Dashboard",
    projectDescription: "Created a weather app using an API. The user can see the current weather and 5 day forecast based on a city they choose.",
    githubRepo: "https://github.com/gfy613/weather_forecast",
    githubSite: "https://gfy613.github.io/weather_forecast/",
    images: "assets/images/weather_dashboard.JPG"
  },
  {
    projectName: "Fitness Tracker",
    projectDescription: "Group project where we created a fitness tracker. In this project we used APIs to generate a workout based on the user inputs. It would also generate a daily calorie intake based on the users weight goal. From there it would track the users weight and create a graph of their weight loss/gain. It would also display the daily weather and show a weekly task list.",
    githubRepo: "https://github.com/evandev01/fitness-tracker",
    githubSite: "https://evandev01.github.io/fitness-tracker/",
    images: "assets/images/fitness_tracker.JPG"
  },
  {
    projectName: "Budget Tracker",
    projectDescription: "Group project where we created a budget app for multiple users. In this project we used heroku, SQL and handebars to create a functioning app. In the app the user can keep track of expenses, budgets, savings and income. The user can also set up bill notifications and see charts of their past expenses",
    githubRepo: "https://github.com/CallieCrownover/budget_tracker",
    githubSite: "https://budget-tracker-project.herokuapp.com/",
    images: "assets/images/budget_Tracker.JPG"
  },
  {
    projectName: "Burger App",
    projectDescription: "The app uses handlebars and keeps track of the burgers the user has eaten and wants to eat.",
    githubRepo: "https://github.com/gfy613/express_handlebars_burger",
    githubSite: "https://stormy-reaches-39077.herokuapp.com/",
    images: "assets/images/burger_app.JPG"
  }
]


for (i = 0; i < codingProjects.length; i++) {

  let columnEl = $("<div>")
  columnEl.addClass("col-lg-4 col-md-6")
  let cardEl = $("<div>")
  cardEl.addClass("card")
  let imageEl = $("<img>")
  imageEl.attr("src", codingProjects[i].images)
  imageEl.addClass("card-img-top")
  imageEl.attr("alt", "Test")
  let cardBodyEl = $("<div>")
  cardBodyEl.addClass("card-body")
  let projectTitleEl = $("<h5>")
  projectTitleEl.addClass("card-title")
  projectTitleEl.text(codingProjects[i].projectName)
  let projectDescriptionEl = $("<p>")
  projectDescriptionEl.addClass("card-text")
  projectDescriptionEl.text(codingProjects[i].projectDescription)
  let gitHubRepoEl = $("<a>")
  gitHubRepoEl.attr("href", codingProjects[i].githubRepo)
  gitHubRepoEl.addClass("btn btn-primary")
  gitHubRepoEl.text("Git Hub Repo")
  let gitHubDepolyed = $("<a>")
  gitHubDepolyed.attr("href", codingProjects[i].githubSite)
  gitHubDepolyed.addClass("btn btn-primary")
  gitHubDepolyed.text("Depolyed")

  cardEl.append(imageEl)
  cardEl.append(cardBodyEl)
  cardEl.append(projectTitleEl)
  cardEl.append(projectDescriptionEl)
  cardEl.append(gitHubRepoEl)
  cardEl.append(gitHubDepolyed)
  columnEl.append(cardEl)
  $("#code_project").append(columnEl)


}





