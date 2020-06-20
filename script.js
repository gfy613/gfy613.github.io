

const codingProjects = [
    {projectName: "Code Refactor",
     projectDescription: "Was given a semi-complete HTML and was asked to correct issues invloving syntax and general clean up of code",
     githubRepo: "https://github.com/gfy613/Homework_1_Code_-Refactor",
     githubSite: "https://gfy613.github.io/Homework_1_Code_-Refactor/",
     images: "code_refactor.jpg"
    },
    {projectName: "Password Generator",
     projectDescription: "Generates a password between 8-126 characters. User can choose to use upper and lower case letters, numbers, or special characters.",
     githubRepo: "https://github.com/gfy613/password_generator",
     githubSite: "https://gfy613.github.io/password_generator/",
     images: "password_generator.jpg"
    },
    {projectName: "Code Quiz",
     projectDescription: "Created a timed quiz that cycles through a series of questions about javascript. If the user gets a question correct it increases the score and if they get it wrong they loose 10 seconds. Uses local storage to record and show past highscores.",
     githubRepo: "https://github.com/gfy613/code_quiz",
     githubSite: "https://gfy613.github.io/code_quiz/",
     images: "code_quiz.jpg"
    },
    {projectName: "Day Planner",
     projectDescription: "Creates a day planner for a user to keep track of their day. Saves tasks to local storage and formats each hour based on the time of day.",
     githubRepo: "https://github.com/gfy613/day_planner",
     githubSite: "https://gfy613.github.io/day_planner/",
     images: "day_planner.jpg"
    },
    {projectName: "Weather Dashboard",
     projectDescription: "Created a weather app using an API. The user can see the current weather and 5 day forecast based on a city they choose.",
     githubRepo: "https://github.com/gfy613/weather_forecast",
     githubSite: "https://gfy613.github.io/weather_forecast/",
     images: "weather_dashboard.jpg"
    },
    {projectName: "Fitness Tracker",
     projectDescription: "Group project where we created a fitness tracker. In this project we used APIs to generate a workout based on the user inputs. It would also generate a daily calorie intake based on the users weight goal. From there it would track the users weight and create a graph of their weight loss/gain. It would also display the daily weather and show a weekly task list.",
     githubRepo: "https://github.com/evandev01/fitness-tracker",
     githubSite: "https://evandev01.github.io/fitness-tracker/",
     images: "fitness_tracker.jpg"
    }
]


for (i = 0; i<codingProjects.length; i++){

  let columnEl = $("<div>")
  columnEl.addClass("col-lg-4 col-md-6")
  let cardEl = $("<div>")
cardEl.addClass("card")
let imageEl = $("<img>")
imageEl.attr("src",codingProjects[i].images)
imageEl.addClass("card-img-top" )
imageEl.attr("alt","Test")
let cardBodyEl = $("<div>")
cardBodyEl.addClass("card-body")
let projectTitleEl = $("<h5>")
projectTitleEl.addClass("card-title")
projectTitleEl.text(codingProjects[i].projectName)
let projectDescriptionEl = $("<p>")
projectDescriptionEl.addClass("card-text")
projectDescriptionEl.text(codingProjects[i].projectDescription)
let gitHubRepoEl = $("<a>")
gitHubRepoEl.attr("href",codingProjects[i].githubRepo)
gitHubRepoEl.addClass("btn btn-primary")
gitHubRepoEl.text("Git Hub Repo")
let gitHubDepolyed = $("<a>")
gitHubDepolyed.attr("href",codingProjects[i].githubSite)
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





