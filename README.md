# Product Management API

The Product Management API is a Node.js Express-based RESTful service designed to interact with the FakeStoreAPI for managing product data. It allows users to perform key operations such as retrieving product and retrieving product listings by category, adding new products, and managing product information efficiently.

## Features

1. Get Product: Fetch product list.
2. List Products by Category: Fetch product details based on the provided category detail.
3. Add New Product: Add a new product to the FakeStore database using POST requests.

## Technologies Used

- Node.js
- Express
- Axios for API calls

### Setup and Installation

**Clone the repository:**

```
 git clone https://github.com/Sajid788/Prospecta.git
 cd Prospecta

```

### Build and Run the Application

```
npm install
npm start
```

### API Endpoints

- **List of Products by Category:** `GET /api/products/category/{category}`

```

[

{
            "id": 5,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 4.6,
                "count": 400
            }
        },
        {
            "id": 6,
            "title": "Solid Gold Petite Micropave ",
            "price": 168,
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 70
            }
        }
]

```

- **Add New Product:** `POST /products`

##### Request Body:

```
{
    "title": "Test Product",
    "price": 29.99,
    "description": "A sample product",
    "image": "https://example.com/image.jpg",
    "category": "electronics"
}

```

##### Response:
```

{
    "id": 21,
        "title": "Test Product",
        "price": 29.99,
        "description": "A sample product",
        "image": "https://example.com/image.jpg",
        "category": "electronics"
}

```
