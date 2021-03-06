const pages = {
  about: {
    title: "About",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur consectetur debitis dignissimos est facilis, fugiat ipsa nihil quaerat quasi ratione rem, soluta! Alias consequuntur eius eum fugiat nam obcaecati officiis porro. Doloribus error praesentium quam rerum sed!",
    title_2: "Education",
    description_2: [
      {year: '2021', name: 'SkillUp', city: 'Dnipro'},
      {year: '2019', name: 'IT Step Academy', city: 'Dnipro'},
      {year: '2018', name: 'BSc in Computer Graphics in the field of Computer Art Design', city: 'Dnipro'},
    ],
    title_3: "Interests",
    description_3: [
      {url: 'img/hobbies/vel.png', title: 'Cycling'},
      {url: 'img/hobbies/swim.png', title: 'Swimming'},
      {url: 'img/hobbies/walk.png', title: 'Walking'},
      {url: 'img/hobbies/read.png', title: 'Reading'},
      {url: 'img/hobbies/music.png', title: 'Music'},
      {url: 'img/hobbies/sci.png', title: 'Science'},
      {url: 'img/hobbies/tea.png', title: 'Tea'},
      {url: 'img/hobbies/cake.png', title: 'Sweet'},
    ],
  },
  exp: {
    title: "Experience",
    description: [
      {company: 'Google', year: '2021'},
      {company: 'Facebook', year: '2020'},
      {company: 'Epam', year: '2018'},
      {company: 'Wix', year: '2015'},
    ],
    title_2: 'Skills',
    description_2: [
      {src: 'img/skills/html5.png', skill: 'HTML5', exp: '2 years'},
      {src: 'img/skills/css3.png', skill: 'CSS3', exp: '2 years'},
      {src: 'img/skills/js.png', skill: 'JS', exp: '2 years'},
      {src: 'img/skills/jq.png', skill: 'jQuery', exp: '2 years'},
      {src: 'img/skills/bootstrap.png', skill: 'Bootstrap', exp: '2 years'},
      {src: 'img/skills/react.png', skill: 'React', exp: '2 months'},
      {src: 'img/skills/redux.png', skill: 'Redux', exp: '2 months'},
      {src: 'img/skills/nextjs.png', skill: 'NextJS', exp: '2 months'},
      {src: 'img/skills/nodejs.png', skill: 'NodeJS', exp: '1 year'},
      {src: 'img/skills/nodejs.png', skill: 'ExpressJS', exp: '1 year'},
      {src: 'img/skills/deno.png', skill: 'Deno', exp: '1 year'},
      {src: 'img/skills/webpack.png', skill: 'Webpack', exp: '1 year'},
      {src: 'img/skills/scss.png', skill: 'SCSS', exp: '1 year'},
      {src: 'img/skills/sass.png', skill: 'SASS', exp: '1 year'},
      {src: 'img/skills/sql.png', skill: 'MySQL', exp: '1 year'},
    ]
  },
  portfolio: {
    title: 'Portfolio',
    description: [
      {href: 'https://dribbble.com/', src: 'https://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png', domain: 'dribbble.com'},
      {href: 'https://playcode.io/', src: 'https://playcode.io/lstatic/img/logo.png', domain: 'playcode.io'},
      {href: 'https://quizlet.com/', src: 'https://assets.quizlet.com/a/j/dist/i/favicon.6e263725c926227.ico', domain: 'quizlet.com'},
      {href: 'https://css-tricks.com/', src: 'https://css-tricks.com/favicon.ico', domain: 'css-tricks.com'},
      {href: 'https://materializecss.com/', src: 'https://materializecss.com/images/favicon/apple-touch-icon-152x152.png', domain: 'materializecss.com'},
      {href: 'https://www.protopie.io/', src: 'https://img.apksum.com/28/io.protopie.companion/5.1.0/icon.png', domain: 'protopie.io'},
      {href: 'https://www.w3schools.com/', src: 'https://www.w3schools.com/favicon.ico', domain: 'w3schools.com'},
      {href: 'https://www.pexels.com/', src: 'https://www.pexels.com/favicon.ico', domain: 'pexels.com'},
    ]
  }
}

module.exports = pages;