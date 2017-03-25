import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  apps = [
    {
      name: 'GraspJS',
      description: 'Drag-and-drop programming sandbox for beginner javascript programmers.',
      github: 'https://github.com/leadpython/Grasp-2/',
      productLink: 'http://graspjs.co/',
      imageUrl: '../assets/grasp.png',
      technologies: 'JavaScript, HTML, CSS, AngularJS, React, Bootstrap, Postgresql'
    },
    {
      name: 'Dark.net Hacker',
      description: 'A mobile hacking game where you must use deductive logic to crack your targets\' passwords.',
      github: 'https://github.com/leadpython/darknet-hacker',
      productLink: 'https://itunes.apple.com/us/app/dark.net-hacker/id1186099128',
      imageUrl: '../assets/darknet.png',
      technologies: 'JavaScript, HTML, CSS, Objective-C, AngularJS, Ionic, Cordova'
    },
    {
      name: 'Corswerk',
      description: 'A simple course planner app for students.',
      github: 'https://github.com/leadpython/Corswerk-Mobile',
      productLink: 'https://itunes.apple.com/us/app/corswerk/id1206491077',
      imageUrl: '../assets/corswerk.png',
      technologies: 'JavaScript, HTML, CSS, Objective-C, AngularJS, Ionic, Cordova'
    },
    {
      name: 'CookedIn',
      description: 'LinkedIn for chefs',
      github: 'https://github.com/leadpython/cookedin',
      productLink: 'N/A',
      imageUrl: '../assets/cookedin.png',
      technologies: 'JavaScript, HTML, CSS, AngularJS, Bootstrap'
    },
    {
      name: 'lilbro',
      description: 'Dark.net Hacker prototype.',
      github: 'https://github.com/leadpython/lilbro',
      productLink: 'N/A',
      imageUrl: '../assets/lilbro.jpg',
      technologies: 'JavaScript, HTML, CSS, Objective-C, AngularJS, Ionic, Cordova'
    },
    {
      name: 'MapChat',
      description: 'Google Maps as your chatroom. See your chatmates\' messages pop up on their current locations.',
      github: 'https://github.com/leadpython/legacy',
      productLink: 'N/A',
      imageUrl: 'N/A',
      technologies: 'JavaScript, HTML, CSS, AngularJS, Bootstrap'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
