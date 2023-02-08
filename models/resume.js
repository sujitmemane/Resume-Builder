const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "resumes.json"
);
const getResumesFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Resume {
  constructor(
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
  ) {
    (this.name = name),
      (this.email = email),
      (this.github = github),
      (this.website = website),
      (this.linkedin = linkedin),
      (this.twitter = twitter),
      (this.blog = blog),
      (this.languages = languages),
      (this.frameworks = frameworks),
      (this.tools = tools),
      (this.platforms = platforms),
      (this.databases = databases),
      (this.undergraduate = undergraduate),
      (this.highschool = highschool),
      (this.experience1 = experience1),
      (this.experience1about = experience1about),
      (this.experience1work = experience1work),
      (this.experience2 = experience2),
      (this.experience2about = experience2about),
      (this.experience2work = experience2work),
      (this.projects1 = projects1),
      (this.projects1about = projects1about),
      (this.projects1work = projects1work),
      (this.projects2 = projects2),
      (this.projects2about = projects2about),
      (this.projects2work = projects2work),
      (this.acheivements1 = acheivements1),
      (this.acheivements1about = acheivements1about),
      (this.acheivements1work = acheivements1work),
      (this.acheivements2 = acheivements2),
      (this.acheivements2about = acheivements2about),
      (this.acheivements2work = acheivements2work);
  }
  save() {
    this.resumeId = Math.random().toString();
    getResumesFromFile((resumes) => {
      resumes.push(this);
      fs.writeFile(p, JSON.stringify(resumes), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getResumesFromFile(cb);
  }

  static findById(id, cb) {
    getResumesFromFile((resumes) => {
      const resume = resumes.find((p) => p.resumeId === id);
      cb(resume);
    });
  }
};
