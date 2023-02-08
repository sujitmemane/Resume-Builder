const express = require("express");
const Resume = require("../models/resume");
const router = express.Router();

router.get("/resume-form", (req, res, next) => {
  res.render("user/form", {
    pageTitle: "Build Resume",
  });
});

router.post("/resume-form", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const github = req.body.github;
  const website = req.body.website;
  const linkedin = req.body.linkedin;
  const twitter = req.body.twitter;
  const blog = req.body.blog;
  const languages = req.body.languages;
  const frameworks = req.body.frameworks;
  const tools = req.body.tools;
  const platforms = req.body.platforms;
  const databases = req.body.databases;
  const undergraduate = req.body.undergraduate;
  const highschool = req.body.highschool;
  const experience1 = req.body.experience1;
  const experience1about = req.body.experience1about;
  const experience1work = req.body.experience1work;
  const experience2 = req.body.experience2;
  const experience2about = req.body.experience2about;
  const experience2work = req.body.experience2work;
  const projects1 = req.projects1;
  const projects1about = req.body.projects1about;
  const projects1work = req.body.projects1work;
  const projects2 = req.body.projects2;
  const projects2about = req.body.projects2about;
  const projects2work = req.body.projects2work;
  const acheivements1 = req.acheivements1;
  const acheivements1about = req.body.acheivements1about;
  const acheivements1work = req.body.acheivements1work;
  const acheivements2 = req.acheivements2;
  const acheivements2about = req.body.acheivements2about;
  const acheivements2work = req.body.acheivements2work;
  const resume = new Resume(
    name,
    email,
    github,
    website,
    linkedin,
    twitter,
    blog,
    languages,
    frameworks,
    tools,
    platforms,
    databases,
    undergraduate,
    highschool,
    experience1,
    experience1about,
    experience1work,
    experience2,
    experience2about,
    experience2work,
    projects1,
    projects1about,
    projects1work,
    projects2,
    projects2about,
    projects2work,
    acheivements1,
    acheivements1about,
    acheivements1work,
    acheivements2,
    acheivements2about,
    acheivements2work
  );
  resume.save();
  console.log(req.body);
  res.redirect("/");
});

router.get("/resume/:resumeId", (req, res) => {
  const id = req.params.resumeId;
  Resume.findById(id, (resume) => {
    res.render("user/resume", {
      resume: resume,
      pageTitle: resume.name,
      path: "/resume",
    });
  });
});
router.get("/", (req, res) => {
  Resume.fetchAll((resumes) => {
    res.render("user/index", {
      resumeAll: resumes,
      path: "/",
      pageTitle: "HOME",
    });
  });
});

module.exports = router;
