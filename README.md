# arco

Arco is a responsive fixed-sidebar layout with a two column masonry grid which also features a landing page, a 404 page and a simple permalink structure.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "arco"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: arco
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install arco

## Usage

### Site configuration

The following settings can be configured in your site's `_config.yml`

```yaml
title: Site title
description: Site description
image: /assets/image.png
github_url: https://github.com/meebuhs
resume: true | false
```

### Expected post frontmatter

```
---
layout: post
title: Post title
summary: Post summary
category: completed | ongoing
permalink: /projects/post-title
cover-image: /assets/image-for-front-page.png
top-image: /assets/image-for-top-of-post.png 
mathjax: true | false
---
```

### Resume support

To add a resume to the site, set `resume: true` in your `_config.yml`.
Then create a folder called `_includes` at the root of your site and add your `resume.html` to it.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
