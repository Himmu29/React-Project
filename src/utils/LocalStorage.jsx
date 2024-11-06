localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Rohit",
    "email": "e@e.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Create Landing Page",
        "taskDescription": "Design and implement a responsive landing page",
        "taskDate": "2024-10-18",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Fix in Navbar",
        "taskDescription": "Fix the mobile navbar menu collapsing issue",
        "taskDate": "2024-10-17",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "SEO Optimization",
        "taskDescription": "Improve the SEO score for the main website",
        "taskDate": "2024-10-19",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Aarav",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "completed": 1,
      "newTask": 2,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Develop API Endpoints",
        "taskDescription": "Build RESTful API for user authentication",
        "taskDate": "2024-10-16",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize MySQL database queries for faster loading",
        "taskDate": "2024-10-15",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Set up Jenkins Pipeline",
        "taskDescription": "Create CI/CD pipeline for automated builds",
        "taskDate": "2024-10-18",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Sneha",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Content Writing",
        "taskDescription": "Create blog content for the upcoming product release",
        "taskDate": "2024-10-14",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Newsletter Drafting",
        "taskDescription": "Draft and finalize the monthly newsletter",
        "taskDate": "2024-10-15",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Research SEO Trends",
        "taskDescription": "Research and apply new SEO strategies",
        "taskDate": "2024-10-17",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Vikram",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "completed": 1,
      "newTask": 2,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Run Load Tests",
        "taskDescription": "Perform load testing on the server to ensure performance",
        "taskDate": "2024-10-13",
        "category": "QA",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Security Vulnerability",
        "taskDescription": "Patch the XSS vulnerability in the user login form",
        "taskDate": "2024-10-14",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Automated Testing Setup",
        "taskDescription": "Set up automated test scripts for new feature releases",
        "taskDate": "2024-10-16",
        "category": "QA",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Anjali",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Plan and execute the social media strategy for product launch",
        "taskDate": "2024-10-12",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Customer Survey",
        "taskDescription": "Create and distribute a customer feedback survey",
        "taskDate": "2024-10-13",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Influencer Outreach",
        "taskDescription": "Reach out to influencers for collaboration",
        "taskDate": "2024-10-18",
        "category": "PR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];

  
  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];
  
  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  };


  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));

    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees , admin}
  };