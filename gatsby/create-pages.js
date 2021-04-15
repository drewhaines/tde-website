const createCoursePages = async ({ courses, createPage }) => {
  courses.forEach(course => {
    createPage({
      path: course.path,
      component: require.resolve(`../src/templates/course.js`),
      context: {
        course
      }
    });
  });
};

module.exports = async ({ actions: { createPage } }) => {
  return await Promise.all([
    createCoursePages({
      courses: courseData,
      createPage
    })
  ]);
};

const courseData = [
  {
    title: "Start Here If You're Brand New",
    path: "/courses/welcome-to-software-development"
  },
  {
    title: "Git & Github",
    path: "/courses/git-and-github"
  },
  {
    title: "Intro to Web Development",
    path: "/courses/intro-to-web-development"
  },
  {
    title: "JavaScript and Node JS",
    path: "/courses/javascript-and-nodejs"
  },
  {
    title: "Modern Apps in React",
    path: "/courses/modern-apps-in-react"
  },
  {
    title: "Ruby on Rails",
    path: "/courses/ruby-on-rails"
  },
  {
    title: "Security for Web Apps",
    path: "/courses/security-for-web-apps"
  },
  {
    title: "Performance and Web Vitals",
    path: "/courses/performance-and-web-vitals"
  },
  {
    title: "Getting Paid",
    path: "/courses/getting-paid"
  }
];
