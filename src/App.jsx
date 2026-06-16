import { useMemo, useState } from "react";

const appSchema = {
  "type": "multi-screen-app",
  "title": "amazon dummy",
  "entry": "home",
  "flow": {
    "home": "detail",
    "detail": "cart",
    "upload": "home",
    "cart": "home"
  },
  "screens": {
    "home": {
      "type": "ecommerce",
      "title": "Home / Products",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "200px",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "34px",
              "type": "banner",
              "title": "RapidMart Marketplace",
              "subtitle": "Curated deals across everyday marketplace categories.",
              "id": "fa87bc0b-1eae-4cf3-b7fc-8d0911ccf54f"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Grid",
              "columns": 5,
              "gap": 16,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Electronics",
                  "value": "Audio and devices",
                  "targetScreen": "",
                  "id": "ad1d944e-4040-4776-9a75-9b509f14e8bf"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Fashion",
                  "value": "Shoes and apparel",
                  "targetScreen": "",
                  "id": "b44e8c6b-4f8a-454b-9563-cd4a1b1f8dcb"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Home",
                  "value": "Kitchen and decor",
                  "targetScreen": "",
                  "id": "f34488b4-c414-4d16-a07c-f46b83c71fb9"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Sports",
                  "value": "Fitness gear",
                  "targetScreen": "",
                  "id": "3e746832-4ccf-4446-b680-181e86924c9c"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Books",
                  "value": "Fiction and learning",
                  "targetScreen": "",
                  "id": "e28e36fd-a927-4387-b131-e7381f973f36"
                }
              ],
              "id": "a52b647f-e12f-47bc-867d-74a09c64f7b7",
              "width": "100%"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Featured Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Noise Canceling Headphones",
                  "price": "$129 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "2ff88d7f-9da4-4afd-a81b-00b6c5ee9979"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "2bedaf09-548c-4bd1-8160-7504c420be92"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "605a4353-e35a-4b51-a255-c3bb33b5cb3d"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Kitchen Air Fryer",
                  "price": "$119 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "a89ec449-2ca1-465d-ae1e-f8e018f53440"
                }
              ],
              "id": "361bb58d-c97d-4024-ae0b-0db32d8497f0"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Popular Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "89643e39-b282-45c8-aeef-51515935e1ae"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "0161ceb3-591c-4b00-ab77-e758f021f908"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Wireless Charger",
                  "price": "$29 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "afbfb3a2-d933-47d8-8382-f0a494ab1695"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Coffee Maker",
                  "price": "$96 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "7d9582e7-b338-444e-9378-3b513a59dee3"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Running Shoes",
                  "price": "$68 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "75e690aa-702e-4410-b4a8-b95d4988508f"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Bestseller Novel",
                  "price": "$18 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "ac40b20b-4cc3-485a-bc68-8131e6b87e7b"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Yoga Mat Pro",
                  "price": "$34 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "d14b876e-ae09-4ca9-9177-d73bfeac9b32"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Cotton Hoodie",
                  "price": "$52 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "f0eef295-066f-43c8-ba85-ccc49b760259"
                }
              ],
              "id": "e2bbe1a6-ac6d-4d27-867c-b7f7c3ea7ae4"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "auto",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "26px",
              "type": "banner",
              "title": "Deal of the Day",
              "subtitle": "Save on top-rated tech bundles before midnight.",
              "id": "a2f478c4-b824-4698-b11a-5542119c23fd"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 14,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Sell on RapidMart",
                  "action": "go-to-screen",
                  "targetScreen": "upload",
                  "id": "abf90e43-7475-4487-b7f4-860119418e51"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "View Cart",
                  "action": "go-to-screen",
                  "targetScreen": "cart",
                  "id": "109d1467-cb3c-4a36-aac0-4aba9369f9dc"
                }
              ],
              "id": "374f28ab-6201-4860-9dd4-b2505bb11d6f"
            }
          ],
          "id": "6a752407-7ca9-4b91-8b4a-f219d50f687e"
        }
      ]
    },
    "detail": {
      "type": "ecommerce",
      "title": "Product Detail",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "stretch",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "44%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "340px",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "30px",
                      "type": "card",
                      "title": "Product Gallery",
                      "value": "Large product image placeholder",
                      "targetScreen": "",
                      "id": "ecff6f4a-46aa-4ef7-a247-165dae39fafa"
                    }
                  ],
                  "id": "58dfbee3-876f-43fd-b016-622501d63a19"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "52%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "Premium wireless audio with adaptive sound and long battery life.",
                      "targetScreen": "",
                      "id": "0493257a-a189-4b32-9ce7-9342f5f95b14"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Price",
                      "value": "$129",
                      "targetScreen": "",
                      "id": "0dca905a-8312-4c6e-a081-959e55dcf86f"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Rating",
                      "value": "4.8 stars | 2,481 reviews",
                      "targetScreen": "",
                      "id": "a3e50c0d-6969-484d-8a5d-49ebfb6c3f5a"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Description",
                      "value": "Active noise cancellation, soft ear cushions, quick charge, and travel case.",
                      "targetScreen": "",
                      "id": "b19afb08-7ea4-4949-b515-4f3339e7f6da"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Buy Now",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "0ed646b1-f2df-4869-8507-316621a9c847"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Add To Cart",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "f3bb55be-370e-4c2a-bc48-076a5446a83d"
                        }
                      ],
                      "id": "a5cff6ce-6a85-4276-8193-e04372993633"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#334155",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Back To Products",
                      "action": "go-to-screen",
                      "targetScreen": "home",
                      "id": "25155087-0a6d-4f13-ad42-9370a8658e12"
                    }
                  ],
                  "id": "a8c0b130-4cfb-4ea3-8a4d-321c3adb7421",
                  "gap": 18
                }
              ],
              "id": "4442ee9c-a78c-4c41-99aa-7426967288af"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Related Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "b20e706d-58c2-4d2d-85cd-5e4e80c52ced"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "b75637bd-229d-4c11-948c-3fd71c2c4b02"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "966fe36b-11bf-475e-afb2-34576b01b7e3"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "35ba64f0-8460-4445-b14e-ca64c8b54447"
                }
              ],
              "id": "2c7d09ce-4ad8-4694-b2db-8fa27e042c5c"
            }
          ],
          "id": "4af5479c-12cf-45f2-bd1f-7f4fe662fd52"
        }
      ]
    },
    "upload": {
      "type": "ecommerce",
      "title": "Upload Product",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Seller Center",
          "subtitle": "Create a polished product listing.",
          "id": "6c997ede-68f4-4276-baf8-91482fb9e6b8"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Product Listing Form",
          "padding": "30px",
          "margin": "0",
          "maxWidth": "740px",
          "backgroundColor": "#1E293B",
          "borderRadius": "16px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "productName",
              "placeholder": "Product name",
              "inputType": "text",
              "id": "cc379d3e-0537-486a-815d-1297babdae78"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "category",
              "placeholder": "Category",
              "inputType": "text",
              "id": "af80b48d-ac17-421f-90a0-a97472ec1f0d"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "price",
              "placeholder": "Price",
              "inputType": "text",
              "id": "c07d7702-e564-4d56-bb72-1788c14a295b"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "description",
              "placeholder": "Short description",
              "inputType": "text",
              "id": "3ab782be-105e-4595-a1ec-a8664a34afc5"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "imageUrl",
              "placeholder": "Image upload URL",
              "inputType": "text",
              "id": "dbb0e50d-2b13-469e-9a1b-45a65c77f494"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Save Product",
                  "action": "none",
                  "targetScreen": "",
                  "id": "1a9ccc85-b8e0-4954-aa63-2341043f8cbe"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Preview Product",
                  "action": "go-to-screen",
                  "targetScreen": "detail",
                  "id": "db1711aa-5e7d-44d1-b3b5-550931119e6a"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#334155",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Back to Products",
                  "action": "go-to-screen",
                  "targetScreen": "home",
                  "id": "3f1c2db4-1f7c-4f42-927e-47274b278b87"
                }
              ],
              "id": "2c599e42-de04-4eec-8987-81cbedcf5ac4"
            }
          ],
          "id": "50e26cd0-d67b-478d-a44d-24da34cf477e"
        }
      ]
    },
    "cart": {
      "type": "ecommerce",
      "title": "Cart / Checkout",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Cart / Checkout",
          "subtitle": "Review items, totals, and checkout actions.",
          "id": "be39e9f3-6902-4ba0-b950-ab7b944e45ed"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "start",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "62%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "$129 | Qty 1",
                      "targetScreen": "",
                      "id": "41dafa89-2810-4b51-be72-8572d6c7cfbb"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Travel Backpack",
                      "value": "$74 | Qty 1",
                      "targetScreen": "",
                      "id": "15df5c17-e531-4ebc-ab50-c41996019ca5"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Shipping Address",
                      "value": "Add delivery address during checkout.",
                      "targetScreen": "",
                      "id": "85cb181e-b55b-435c-adeb-626ea28b6dda"
                    }
                  ],
                  "id": "cf522ef4-5520-419d-aee4-fc56212622bd"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "34%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Subtotal",
                      "value": "$203",
                      "targetScreen": "",
                      "id": "2ac51eb1-aff9-4b43-a959-38b9bf26dee4"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Shipping",
                      "value": "$8",
                      "targetScreen": "",
                      "id": "beea28fb-146d-485c-a065-6be8f4b3b379"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Tax",
                      "value": "$17",
                      "targetScreen": "",
                      "id": "44478b90-02bf-45c8-9d68-e8fb6b9e6449"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#312E81",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "24px",
                      "type": "card",
                      "title": "Total",
                      "value": "$228",
                      "targetScreen": "",
                      "id": "e3e8614b-a4bd-4f47-a7dd-c5cad69eaa21"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Checkout",
                          "action": "none",
                          "targetScreen": "",
                          "id": "c04a9c3d-72ff-4bd7-b059-1a71abf83192"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Continue Shopping",
                          "action": "go-to-screen",
                          "targetScreen": "home",
                          "id": "8a786b02-81f7-4333-acf6-683068bef693"
                        }
                      ],
                      "id": "41f693c2-ed2d-4d38-9038-753423206731"
                    }
                  ],
                  "id": "80045108-0f62-47b7-95c6-4511eada92d5",
                  "gap": 18
                }
              ],
              "id": "e7e77c94-7970-4d2a-84cf-54440df5c9ba"
            }
          ],
          "id": "6ea880fb-9abb-45e2-8f25-0fd8166a0597"
        }
      ]
    }
  },
  "navigation": [],
  "theme": {
    "primaryColor": "#7c3aed",
    "secondaryColor": "#06b6d4",
    "backgroundColor": "#0f172a",
    "surfaceColor": "#1e293b",
    "textColor": "#ffffff",
    "borderRadius": "12px",
    "fontFamily": "Inter",
    "spacing": "normal"
  },
  "components": []
};

const supportedBlockTypes = new Set([
  "hero",
  "banner",
  "card",
  "product-card",
  "button",
  "input",
  "table",
  "chart",
  "container",
  "row",
  "column",
  "grid",
  "spacer",
  "divider",
  "features",
  "cta"
]);

function getScreenKeys(schema) {
  return Object.keys(schema.screens || {});
}

function getInitialScreen(schema) {
  const screenKeys = getScreenKeys(schema);
  if (schema.entry && schema.screens?.[schema.entry]) return schema.entry;
  return screenKeys[0] || "home";
}

function getText(value, fallback = "") {
  return value === undefined || value === null || value === "" ? fallback : value;
}

function toCssSize(value, fallback = undefined) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? value + "px" : value;
}

function getSurfaceStyle(block = {}) {
  return {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    margin: toCssSize(block.margin),
    height: toCssSize(block.height),
    maxWidth: block.maxWidth || undefined,
  };
}

function getLayoutStyle(block = {}) {
  return {
    ...getSurfaceStyle(block),
    "--gap": toCssSize(block.gap, "16px"),
  };
}

function getJustify(value) {
  if (value === "center") return "center";
  if (value === "end") return "flex-end";
  if (value === "between") return "space-between";
  return "flex-start";
}

function getAlign(value) {
  if (value === "start") return "flex-start";
  if (value === "end") return "flex-end";
  if (value === "stretch") return "stretch";
  return "center";
}

function getBlockTarget(block, currentScreen) {
  if (block.targetScreen && appSchema.screens?.[block.targetScreen]) {
    return block.targetScreen;
  }

  if (block.action === "next-screen") {
    const nextScreen = appSchema.flow?.[currentScreen];
    return nextScreen && appSchema.screens?.[nextScreen] ? nextScreen : null;
  }

  if (block.actions?.onClick?.type === "navigate") {
    const target = block.actions.onClick.target;
    return target && appSchema.screens?.[target] ? target : null;
  }

  return null;
}

function navigateTo(target, setCurrentScreen) {
  if (!target || !appSchema.screens?.[target]) return;
  setCurrentScreen(target);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RenderChildren({ blocks = [], currentScreen, setCurrentScreen }) {
  if (!blocks.length) return null;

  return blocks.map((block, index) => (
    <RenderBlock
      key={block.id || block.type + "-" + index}
      block={block}
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
    />
  ));
}

function HeroBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className={"hero hero-" + getText(block.variant, "default")} style={getSurfaceStyle(block)}>
      <div>
        <h1>{getText(block.title, "Hero Title")}</h1>
        <p>{getText(block.subtitle, "Hero subtitle")}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
            {getText(block.buttonLabel, "Get Started")}
          </button>
        </div>
      </div>
    </section>
  );
}

function BannerBlock({ block }) {
  return (
    <section className="banner" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Banner")}</h2>
      <p>{getText(block.subtitle, "Limited time offer")}</p>
    </section>
  );
}

function CardBlock({ block }) {
  return (
    <article className="card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Card title")}</h3>
      <p>{getText(block.value, "")}</p>
    </article>
  );
}

function ProductCardBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const metaParts = String(getText(block.price, "$99")).split("|").map((part) => part.trim()).filter(Boolean);
  const primaryMeta = metaParts[0] || "$99";
  const secondaryMeta = metaParts.slice(1).join(" | ");

  return (
    <article className="product-card" style={getSurfaceStyle(block)}>
      <div className="product-media">
        {block.image ? (
          <img src={block.image} alt={getText(block.name, "Product")} />
        ) : (
          <span>{String(primaryMeta).startsWith("$") ? "Product" : "Video"}</span>
        )}
      </div>
      <h3>{getText(block.name, "Product")}</h3>
      <div className="product-meta">
        <span>{primaryMeta}</span>
        {secondaryMeta ? <small>{secondaryMeta}</small> : null}
      </div>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {String(primaryMeta).startsWith("$") ? "View Product" : "Watch"}
      </button>
    </article>
  );
}

function ButtonBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const style = {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    height: toCssSize(block.height),
    fontSize: toCssSize(block.fontSize),
    fontWeight: block.fontWeight || undefined,
    width: block.widthMode === "full" ? "100%" : "auto",
    maxWidth: block.maxWidth || undefined,
  };

  return (
    <button className="button" type="button" style={style} onClick={() => navigateTo(target, setCurrentScreen)}>
      {getText(block.label, "Button")}
    </button>
  );
}

function InputBlock({ block }) {
  return (
    <input
      className="input"
      type={getText(block.inputType, "text")}
      placeholder={getText(block.placeholder, block.field || "Input")}
      aria-label={getText(block.placeholder, block.field || "Input")}
    />
  );
}

function TableBlock({ block }) {
  const rows = block.rows || [
    ["Customer", "Status", "Amount"],
    ["Alex Morgan", "Paid", "$129"],
    ["Sam Taylor", "Pending", "$89"],
  ];

  return (
    <section className="table-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Table")}</h3>
      <div className="table-scroll">
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  rowIndex === 0 ? (
                    <th key={cellIndex}>{cell}</th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ChartBlock({ block }) {
  return (
    <section className="chart-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Chart")}</h3>
      <div className="chart-bars">
        {[45, 70, 56, 88, 64].map((height, index) => (
          <span key={index} style={{ height: height + "%" }} />
        ))}
      </div>
    </section>
  );
}

function ContainerBlock({ block, currentScreen, setCurrentScreen }) {
  return (
    <section className="layout-container" style={getLayoutStyle(block)}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function RowBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    justifyContent: getJustify(block.justify),
    alignItems: getAlign(block.align),
    flexWrap: block.wrap === false ? "nowrap" : "wrap",
  };

  return (
    <section className="layout-row" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function ColumnBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    flexBasis: block.width || "0",
    flexGrow: block.grow === false ? 0 : 1,
  };

  return (
    <section className="layout-column" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function GridBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    "--columns": Math.max(1, Number(block.columns || 3)),
  };

  return (
    <section className="grid-section" style={style}>
      {block.title ? <h2>{block.title}</h2> : null}
      <div className="layout-grid">
        <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </div>
    </section>
  );
}

function SpacerBlock({ block }) {
  return <div style={{ height: toCssSize(block.height, "32px") }} />;
}

function DividerBlock({ block }) {
  return <hr style={{ borderColor: block.color || "#334155", borderWidth: toCssSize(block.thickness, "1px") }} />;
}

function FeaturesBlock({ block }) {
  const items = block.items?.length ? block.items : ["Fast", "Simple", "Responsive"];

  return (
    <section className="features" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Features")}</h2>
      <div className="feature-grid">
        {items.map((item, index) => (
          <article className="card" key={index}>
            <h3>{item}</h3>
            <p>{block.descriptions?.[index] || "A polished generated section."}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className="cta" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Ready to start?")}</h2>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {getText(block.buttonLabel, "Get Started")}
      </button>
    </section>
  );
}

function UnsupportedBlock({ block }) {
  return (
    <section className="card">
      <h3>Unsupported block</h3>
      <p>{block.type}</p>
    </section>
  );
}

function RenderBlock({ block, currentScreen, setCurrentScreen }) {
  if (!block || !supportedBlockTypes.has(block.type)) {
    return <UnsupportedBlock block={block || { type: "unknown" }} />;
  }

  switch (block.type) {
    case "hero":
      return <HeroBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "banner":
      return <BannerBlock block={block} />;
    case "card":
      return <CardBlock block={block} />;
    case "product-card":
      return <ProductCardBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "button":
      return <ButtonBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "input":
      return <InputBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "chart":
      return <ChartBlock block={block} />;
    case "container":
      return <ContainerBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "row":
      return <RowBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "column":
      return <ColumnBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "grid":
      return <GridBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    case "divider":
      return <DividerBlock block={block} />;
    case "features":
      return <FeaturesBlock block={block} />;
    case "cta":
      return <CtaBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    default:
      return <UnsupportedBlock block={block} />;
  }
}

export default function App() {
  const screenKeys = useMemo(() => getScreenKeys(appSchema), []);
  const [currentScreen, setCurrentScreen] = useState(() => getInitialScreen(appSchema));
  const screen = appSchema.screens?.[currentScreen] || appSchema.screens?.[screenKeys[0]] || {
    title: "Untitled Screen",
    blocks: [],
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Exported RAPID App</p>
          <h1>{getText(appSchema.title, "RAPID App")}</h1>
        </div>
        <nav aria-label="Screens">
          {screenKeys.map((screenKey) => (
            <button
              key={screenKey}
              type="button"
              className={screenKey === currentScreen ? "active" : ""}
              onClick={() => navigateTo(screenKey, setCurrentScreen)}
            >
              {getText(appSchema.screens[screenKey]?.title, screenKey)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="screen-title">
          <p>Screen</p>
          <h2>{getText(screen.title, currentScreen)}</h2>
        </div>
        <RenderChildren blocks={screen.blocks} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </main>
    </div>
  );
}
