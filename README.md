Blog Eleven Labs
===================

Welcome to the [ElevenLabs] blog (https://blog.eleven-labs.com), this is [Jamstack](https://jamstack.org/) website.

----------

What's inside?
-------------

This project includes the following packages:

- `ui`: UI library shared with `website`
- `website`: website with [Jamstack](https://jamstack.org/) architecture

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

----------

Installation the blog
-------------

**Technical requirements to work on this project**
author
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)

**Computer requirements to work on this project**

- [git](https://git-scm.com/download/linux)

For local installation:
- [Node Version Manager](https://github.com/nvm-sh/nvm)

For docker installation:
- [docker](https://docs.docker.com/install/)
- [docker-compose](https://docs.docker.com/compose/install/)

**1 - Clone the project**
```bash
git clone git@github.com:fpasquet/blog.eleven-labs.com.git
```

**2 - Run the project locally**
```bash
nvm install
yarn start
```

Urls:
- Storybook: http://localhost:6006
- Website: http://localhost:5173

**3 - Run the project with docker**
```bash
docker-compose up -d
```

Add to your `/etc/hosts` file
```bash
127.0.0.1 blog.eleven-labs.local
```

Urls:
- Storybook: http://blog.eleven-labs.local/storybook/
- Website: http://blog.eleven-labs.local/

----------

Create your author page
-------------

**1 - Create the markdown file**

In the `packages/website/_authors` folder add a markdown file with your username.
```bash
cd packages/website/_authors && touch john.md
```

**2 - Add content to the file**

Here is the template of the file.

```md
---
username: john
name: John Doe
---
Your description
```

**3 - Add your avatar**

Add your avatar to the `packages/website/public/imgs/authors/username.jpg` folder.

**4 - Add your pull request**

Create your branch and add your pull request with the label `publication`. 
```bash
git checkout -b feat/add-author-username
```

----------

Create your post page
-------------

**1 - Create the markdown file**

In the folder `packages/website/_posts` add a markdown file with the name of your post and prefixed with the date.
```bash
cd packages/website/_posts && touch YYYY-MM-DD-slug.md
```

**2 - Add content to the file**

Here is the template of the file.

```md
---
lang: lang
slug: slug of the post
title: title of the post
excerpt: description of the post
authors:
  - author's username
date: YYYY-MM-DD
isDraft: true
---
Content of your post
```

**3 - Write the content of the post**

The content of the articlpostbe written in markdown.
You can use one of the solutions:
- [StackEdit](https://stackedit.io)
- [Dillinger](http://dillinger.io)

To add images to your post, you will need to create the folder `packages/website/public/imgs/posts/YYYY-MM-DD-slug/` and add your images there.
Then in the markdown content, insert the tag:
```md
![alt of image](/imgs/posts/YYYY-MM-DD-slug/image-name.png)
```

**4 - Add your pull request**

Create your branch and add your pull request. 
```bash
git checkout -b feat/add-post-slug
```

Once your post is finished and you want it to be published, set the isDraft value to false and add the label `publication` to your PR.
