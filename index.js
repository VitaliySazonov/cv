let
  express = require('express'),
  app = express(),
  path = require('path'),
  PORT = process.env.PORT || 5000,
  exphbs = require("express-handlebars"),
  hbs= exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
  }),
  pages = require('./public/js/pages')


app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("./pages/index", {
    isHome: true,
    title: 'CV',
  })
})

app.get("/about", (req, res) => {
  res.render("./pages/about", {
    isAbout: true,
    title: pages.about.title,
    page: pages.about
  })
})

app.get("/portfolio", (req, res) => {
  res.render("./pages/portfolio", {
    isPortfolio: true,
    title: pages.portfolio.title,
    page: pages.portfolio
  })
})

app.get("/exp", (req, res) => {
  res.render("./pages/exp", {
    isExp: true,
    title: pages.exp.title,
    page: pages.exp
  })
})

app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log(`PORT => ${PORT} has started...`))