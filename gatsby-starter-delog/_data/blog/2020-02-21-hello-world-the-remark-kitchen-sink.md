---
template: BlogPost
path: /component-library
date: 2020-09-01T12:12:25.364Z
title: 'Component library with StencilJS'
thumbnail: /assets/image-9.png
---

# Component Library Development

#### Will walk you through the below topics to explain my contribution to Component Library at NCR:

1. Context
2. Introduction
3. My role
4. Contribution

### 1. Context 
This is to give the high level idea of my role in contributing it to the component library as i am not supposed to use any git url's or code over here because of the confidentiality, i have documented my work in detail.Will be adding Live application open source screens if i can find any to the blog thoroughly.

#### 2. Introduction
As any Enterprise, NCR had their own Design system to maintain consistency and Branding across hundreds of products acrossges.A component library helps designers to stick to the guidelines of your product and it has less impact on development. Instead of recreating components you are reusing components.It also helps application level developers to work on same components/widgets all the time. It will create certain standard/guidelines to be followed when you develop a product for designers and Developers. Because it takes immense amount of research,time,Audit,understanding products and understanding your customers.
Component library will help in all the ways in scaling the effeciency and decreasing the developers cost


#### 3. My Role
* When i was hired at NCR, i was Hired as UI Engineer-1 role for Developing component library
* Got an opportunity to understand the products, UI and Existing Design System
* Before it was on Angular and React as different Repo for Component library(*Which i would be explainingall those details in 2019 Experience card*)
* I am currently working with the Team size of 15 members including designers,branding and development team.
* Part of 4 people team with the development and all tech stack,Architecture and development decisions will be taken by our R & D Team after gettin input from Marketing Teams, Branding Teams and Design Team.
* Its a constant collaboration between the teams to build solid Component library

#### 4. Contribution
* Working on **Monorepo**, as this is the era of sharing single source of truth.To maintain monorepo we took care of pre-requisites such as :
  * Package Management
  * Cross Package Orchestrators
  * Linters
  * Testing tools
  * Build System/Infrastructure
* Have initially used rush for package manager but moving towards yarn lately
* Using **StencilJS**, to create web-components,As many applications have different kind of libraries/frameworks used across the company, from my previous experience when we started building component library we had challenges that had to be handled, such as:
  * How can we build dependent free component library for all the applications?
  * How can we not increase dependency on component library end so that application developers need not use many wrappers around the each component that they will be utilizing?
* until then, every framework/library has to have different Repo to support that particular application framework or library, Like Angular Applications i have maintained Web-components for Angular Repo, React Repo for React components etc., These have been handled by introducing stenciljs into the system
* StencilJS is the actual synonym of write once and use everywhere, which i could successfully  push towards our application level developers to leverage their development experience
* Apart from that i also worked on creating CSS Framework to stick to the themes,colors, fonts, typography by our Branding and Design team.To make it more Compatabile for us developers to develop and maintain the code
* Component library need not be used only as white label products across NCR, It has other set of services such as maintaining and developing clients application, so for that maintaining structured CSS with proper Conventions was the priority
* Component library is used across NCR in many products some of them to name ATM, ALOHA, Silver, Emerald etc., are the prime proucts which rigourously use component library to enhance and increase the Front end development Experience
* Currently new version has been released which is in beta-mode and it is called NCR Design System as of now.
* Working on series of components to make it as official release




