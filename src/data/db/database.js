import Mock from "../mock";

const database = {
  information: {
    name: 'Huashen Liang',
    aboutContent: "I am a Junior Web/DevOps developer who can turn coffee into code.",
    age: 24,
    phone: '+1 705-970-7505',
    location: 'Ontario, Canada',
    language: 'English, Cantonese, Mandarin',
    email: 'JohnnyLiang77@gmail.com',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/hua-shen-liang/',
      dribbble: '',
      github: 'https://github.com/huashenliang'
    },
    brandImage: '/images/icon.jpg',
    aboutImage: '/images/developer.jpg',
    certImages: ['/images/CKAD.jpg'],
    aboutImageLg: '/images/developer.jpg',
    cvfile: '/files/resume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: {
    devops:[
      {
        title: "Docker",
        value: 1
      },
      {
        title: "Jenkins",
        value: 1
      },
      {
        title: "Kubernetes",
        value: 1
      },
      {
        title: "AWS",
        value: 0.5
      }
    ],
    web:[
      {
        title: "html",
        value: 2
      },
      {
        title: "CSS",
        value: 2
      },
      {
        title: "JavaScript",
        value: 2
      },
      {
        title: "React",
        value: 1
      },
      {
        title: "Redux",
        value: 1
      },
      {
        title: "MongoDb",
        value: 1
      },
      {
        title: "Graphql",
        value: 1
      },
      {
        title: "WordPress",
        value: 1
      }
    ],
    app:[
      {
        title: "c#",
        value: 1
      },
      {
        title: ".net",
        value: 1
      },
      {
        title: "Java",
        value: 2
      },
      {
        title: "Andorid Studio",
        value: 1
      },
      {
        title: "Swift",
        value: 1
      },
      {
        title: "Xcode",
        value: 1
      },
      {
        title: "Sql",
        value: 2
      },
      {
        title: "Mysql",
        value: 2
      }
    ]
  },
  // [
  //   {
  //     title: "Docker",
  //     value: 95
  //   },
  //   {
  //     title: "CSS3",
  //     value: 90
  //   },
  //   {
  //     title: "Javascript",
  //     value: 70
  //   },
  //   {
  //     title: "jQuery",
  //     value: 85
  //   },
  //   {
  //     title: "ReactJS",
  //     value: 80
  //   },
  //   {
  //     title: "Photoshop",
  //     value: 65
  //   }
  // ],
  portfolios: [
    {
      id: 1,
      title: "Academy Website",
      subtitle: "An academy website for school, college and university. Built by WordPress using Elementor and OceanWP theme",
      imageUrl: "/images/academy-project.png",
      largeImageUrl: ["/images/academy-project.png"],
      url: 'http://academy-project-wp.com/'
    },
    {
      id: 2,
      title: "Guitar E-commerce Website ",
      subtitle: "An e-commerce project using React, Redux, Express, MongoDB. Able to login as admin to add, remove and edit products",
      imageUrl: "/images/project-1.png",
      largeImageUrl: ["/images/Tune.gif"],
      url: 'http://www.tune-reactproject.com/'
    },
    {
      id: 3,
      title: "Football Club Info Website ",
      subtitle: "Manchester Untied Info website using React, Firebase as realtime database and Firebase bucket to store images. Able to login as admin to add, remove and edit player and match informaiton.",
      imageUrl: "/images/mutd.png",
      largeImageUrl: ["/images/mutd-info.gif"],
      url: 'http://www.mutd-info-project.site/'
    },
    {
      id: 9,
      title: "Vue - YouTube video browser",
      subtitle: "A simple video browser using vue and YouTube API, able to search and play video",
      imageUrl: "/images/vue-videobrowser.png",
      largeImageUrl: ["/images/video-browser.gif"],
      url: 'http://vue-videobrowser.xyz./'
    },
 
    {
      id: 8,
      title: "Coming Soon Landing Page ",
      subtitle: "A coming soon landing page using react and mailchampAPI, showing the countdown time and able to subscribe email",
      imageUrl: "/images/lofy.png",
      largeImageUrl: ["/images/lofy.png"],
      url: 'https://lofy.io/'
    },
    {
      id: 7,
      title: "React COVID-19 Tracker",
      subtitle: "Tracking for COVID-19 cases using React, react-chart, and Express",
      imageUrl: "/images/covid-19-tracker.png",
      largeImageUrl: [
        "/images/covid-19-tracker.png"
      ],
      url: 'http://www.react-tracker.xyz/'
    },
    {
      id: 4,
      title: "React Realtime Chatroom ",
      subtitle: "A realtime chatroom using React, Express and Socket.io",
      imageUrl: "/images/project-3.jpg",
      largeImageUrl: ["/images/project-3.jpg"],
      url: 'http://www.react-chatroom.site/'
    },
    {
      id: 5,
      title: "DevOps Pipeline Project",
      subtitle: "Jenkins CI/CD pipeline using Jenkinsfile and Dockerfile for this personal portofilo project and build docker container on AWS EC2 instance.",
      imageUrl: "/images/project-2.PNG",
      largeImageUrl: [
        "/images/project-2.png"
      ]
      // url: 'https://github.com/huashenliang?tab=repositories'
    },
    {
      id: 6,
      title: "Leave Management Dashboard",
      subtitle: "A leave management dashboard using asp.net core, bootstrap and implemented Website Layout using AdminLTE Theme",
      imageUrl: "/images/leave-management.png",
      largeImageUrl: ["/images/leave-management.png"],
      url: 'https://leave-management20200430101524.azurewebsites.net/LeaveRequest'
    },
   
  
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "09/2019 - 12/2019",
        position: "DevOps Engineer",
        company: "Manulife - Kitchener/Waterloo, Ontario, Canada",
        details: ["Worked on Node.js project ‘Clarity Dashboard’ utilizing React, Redux, GraphQL and MongoDB to display aggregated data",
        "Built and modified GraphQL API to implement a higher-level hierarchy of business units, computed aggerated data based on business unit labels tagged with each dashboard and helps leaders to the view overall performance of selected teams",
        "Debugged JIRA collector, Gitlab collector and Clarity GraphQL API for missing data and data discrepancies",
       "Understanding CI/CD processes and concepts, experienced with Jenkins, JCasC, SonarQube, GIT, Artifactory and learned Chef for configuration management tool, Docker and Kubernetes for containerization and container orchestration"
        ]
      },
      {
        id: 2,
        year: "09/2018 - 12/2018",
        position: "Web Developer ",
        company: "Fortune Edge Trading Co., Ltd. - China ",
        details: ["Operated in an agile, collaborative environment to develop and design new e-commerce sites using WordPress",
        "Obtained strong organization skills and essential knowledge of project management processes through planning, designing, building, testing and deploying applications and websites",
       "Created website content, meta descriptions, and title tags in support of SEO strategies and improved the conversion rate resulting in sales increase and higher traffic"
        ]
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "01/2018 - 12/2019",
        graduation: "Computer Programming - Diploma",
        university: "Georgian College - Barrie, Ontario, Canada",
        // details: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."]
      },
      {
        id: 2,
        year: "09/2014 - 07/2017",
        graduation: "Business Management - Bachelor of Arts",
        university: "University of Leicester - Leicester, England, UK",
      
      },

    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/comingsoon.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+1 705-970-7505'],
    emailAddress: ['JohnnyLiang77@gmail.com'],
    address: "Ontario, Canada"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});