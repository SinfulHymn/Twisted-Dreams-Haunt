<div id="top" align="center">
  <a href="https://github.com/Kmachappy/Twisted-Dreams-Haunt">
    <img src="https://i.imgur.com/8h2BmLd.png" alt="Logo" width="200" height="280">
  </a>
  <a href="https://twisteddreamshaunt.com/">
    <h3 align="center">Twisted Dreams Haunt</h3>
  </a>
  <p align="center">
    An Event & Ecommerce Web App <br/>
    A Full Stack Nextjs 
  </p>
    <a href="https://twisteddreamshaunt.com/"><strong>Live Website - Twisted Dreams Haunt</strong></a>
    <br />
 Event/Ecommerce Web Application built with <br/>
    <a href="https://nextjs.org/">Nextjs</a>
    ·
    <a href="https://www.shopify.com/">Shopify</a>
    ·
    <a href="https://strapi.io/">Strapi</a>
    ·
    <a href="https://graphql.org/">Graphql</a>
    ·
    <a href="https://tailwindcss.com/">TailwindCSS</a>
  </p>
</div>

# About
|            Description             |               Screenshot             |
| :--------------------------------: | :----------------------------------: |
| <p align="left">- A React event and ecommerce web application that displays media and information about the Twisted Dreams Event. <br> - Users will be able to explore event details and it's store with Products!<br>- Users are able to browse and filter products by their categories <br> - Users are able to add products to their cart and maintain session with their cart <br> - Users are able to checkout items added to cart <br> - checkout happens through shopify storefront api | <img src="https://i.imgur.com/nqHnjUA.pngng" alt="Logo" width="700" height="460"> |

<p align="right">(<a href="#top">back to top</a>)</p>

# How to use

```
$ npm install

$ npm run dev

$ mv example.env.local .env.local

edit .env.local with your own shopify store credentials
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Functionality and Development
```
- client needed a website to sell products and display information about their event
- I leveraged Shopify's storefront api to create a custom ecommerce experience
- Nextjs was used to create a static site that would be able to fetch data from the Shopify api and strapi api
- Strapi was used to create a headless cms that would allow the client to update their event information, while also allowing me to fetch the data from the cms to display on the website
- two graphql queries were created to fetch data from the cms and the shopify api
- all custom tailwindcss components were created to style the website and to display the data from the graphql queries
- the website is fully responsive and mobile friendly
- the website is fully functional and is currently live at https://twisteddreamshaunt.com/
```
<p align="right">(<a href="#top">back to top</a>)</p>


# Current State
```
- User is currently able to visit the site and see a directory of products

- user is able to log in through google strategy OAuth or django authentication

- user is able to click on any of the product displayed to view full information

- if user is logged in they will have access to be able to add item to their cart and checkout

- if user is logged in on the product they are viewing they are able to add a comment

- user will be able to see their comments added to the product they commented on
```
<p align="right">(<a href="#top">back to top</a>)</p>

# Roadmap and future Implementations

```

- add QR code ticketing system to allow users to scan their tickets on their phone

- add gallery functionality to allow users to view photos from past events

- add a blog section to allow users to view blog posts

- add a blog section to allow users to create blog posts

- add a blog section to allow users to edit blog posts

- add a blog section to allow users to delete blog posts

- add a blog section to allow users to comment on blog posts

- add integration with google analytics to allow users to view analytics on their website
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Routes

```
- get '/' --> renders home page

- get '/store' --> renders products page

- get '/store/[product]' --> renders product show page

- get '/store/[category]' --> renders category page

- get '/cart/[id]' --> renders cart page

- get '/checkout' --> renders checkout page

- get '/about' --> renders about page

- get '/contact' --> renders contact page

- get '/gallery' --> renders gallery page

- get '/gallery/[year]' --> renders gallery year page

- get '/gallery/[year]/[album]' --> renders gallery album page

- get '/gallery/[year]/[album]/[image]' --> renders gallery image page

- get '/admin' --> renders admin page

- get '/admin/[page]' --> renders admin page

```

<p align="right">(<a href="#top">back to top</a>)</p>

# Technologies used

- HTML
- CSS
- TailwindCSS
- Typescript
- Nextjs
- shopify storefront api
- strapi
- graphql
- react
-  react-query
- swiper
  

<p align="right">(<a href="#top">back to top</a>)</p>

# API's used

 <!-- - **[Strava API](https://developers.strava.com/)**. -->

- **[Leaflet API](https://leafletjs.com/SlavaUkraini/)**.
- **[mapbox API](https://leafletjs.com/SlavaUkraini/)**.
- **[Shopify Storefront API](https://shopify.dev/docs/storefront-api)**.
- **[Strapi API](https://strapi.io/)**.
- **[Graphql API](https://graphql.org/)**.


<p align="right">(<a href="#top">back to top</a>)</p>


# KmacShop ScreenShots

|              Index/Home              |          Store Page           |
| :----------------------------------: | :----------------------------------: |
| ![](https://i.imgur.com/F6LR7UT.jpg) | ![](https://i.imgur.com/YTHRRN6.jpg) |

|             Product Show             |             Cart Summary             |
| :----------------------------------: | :----------------------------------: |
| ![](https://i.imgur.com/VaDycAB.jpg) | ![](https://i.imgur.com/EzpncJ4.jpg) |


<p align="right">(<a href="#top">back to top</a>)</p>


# KmacShop WireFrame 

|              Index/Home              |          Store           |
| :----------------------------------: | :----------------------------------: |
| ![](https://i.imgur.com/NhfcEpd.png) | ![](https://i.imgur.com/u3oa9GA.png) |

|             Product Show             |             Current ERD              |
| :----------------------------------: | :----------------------------------: |
| ![](https://i.imgur.com/253u25t.png) | ![](https://i.imgur.com/DKp0AQc.png) |

<p align="right">(<a href="#top">back to top</a>)</p>