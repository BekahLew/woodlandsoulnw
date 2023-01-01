const settings = {
  "name": "woodlandsoulnw",
  "state": {
    "frontity": {
      "url": "https://woodlandsoulnw.com",
      "title": "Woodland Soul NW",
      "description": "Nature-Inspired Crafts"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Shop",
              "/shop/"
            ],
            [
              "Blog",
              "/blog/"
            ],
            [
              "Testimonials",
              "/testimonials/"
            ],
            [
              "Contact",
              "/contact/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/woodlandsoulnw.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
