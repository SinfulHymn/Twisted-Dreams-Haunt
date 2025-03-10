import Client from 'shopify-buy';

export const shopifyClient = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
});

export const parseShopifyResponse = (response) =>
  JSON.parse(JSON.stringify(response));
