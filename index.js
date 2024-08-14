// app.js
import express from 'express';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';
import cors from 'cors';
const app = express();
const port = 3003;

const allProducts= {          
    "products" : [
      {
        id: 1,
        title: 'Essence Mascara Lash Princess',
        thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
        description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
        price: 9.99,
        qty: 1
      },
      {
        id: 2,
        title: 'Eyeshadow Palette with Mirror',
        thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png',
        description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        price: 19.99,
        qty: 1
      },
      {
        id: 3,
        title: 'Powder Canister',
        thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
        description: 'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
        price: 14.99,
        qty: 1
      },
      {
        id: 4,
        title: 'Red Lipstick',
        thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png',
        description: 'The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',
        price: 12.99,
        qty: 1
      },
      {
        id: 5,
        title: 'Red Nail Polish',
        thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png',
        description: 'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
        price: 8.99,
        qty: 1
      },
      {
        id: 6,
        title: 'Calvin Klein CK One',
        thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png',
        description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        price: 49.99,
        qty: 1
      },
      {
        id: 7,
        title: 'Chanel Coco Noir Eau De',
        thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png',
        description: 'Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.',
        price: 129.99,
        qty: 1
      },
      {
        id: 8,
        title: "Dior J'adore",
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
        description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        price: 89.99,
        qty: 1
      },
      {
        id: 9,
        title: 'Dolce Shine Eau de',
        thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png',
        description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        price: 69.99,
        qty: 1
      },
      {
        id: 10,
        title: 'Gucci Bloom Eau de',
        thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png',
        description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        price: 79.99,
        qty: 1
      },
      {
        id: 11,
        title: 'Annibale Colombo Bed',
        thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png',
        description: 'The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.',
        price: 1899.99,
        qty: 1
      },
      {
        id: 12,
        title: 'Annibale Colombo Sofa',
        thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png',
        description: 'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',
        price: 2499.99,
        qty: 1
      },
      {
        id: 13,
        title: 'Bedside Table African Cherry',
        thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png',
        description: 'The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.',
        price: 299.99,
        qty: 1
      },
      {
        id: 14,
        title: 'Knoll Saarinen Executive Conference Chair',
        thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png',
        description: 'The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.',
        price: 499.99,
        qty: 1
      },
      {
        id: 15,
        title: 'Wooden Bathroom Sink With Mirror',
        thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png',
        description: 'The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.',
        price: 799.99,
        qty: 1
      },
      {
        id: 16,
        title: 'Apple',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png',
        description: 'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',
        price: 1.99,
        qty: 1
      },
      {
        id: 17,
        title: 'Beef Steak',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png',
        description: 'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
        price: 12.99,
        qty: 1
      },
      {
        id: 18,
        title: 'Cat Food',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png',
        description: 'Nutritious cat food formulated to meet the dietary needs of your feline friend.',
        price: 8.99,
        qty: 1
      },
      {
        id: 19,
        title: 'Chicken Meat',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png',
        description: 'Fresh and tender chicken meat, suitable for various culinary preparations.',
        price: 9.99,
        qty: 1
      },
      {
        id: 20,
        title: 'Cooking Oil',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png',
        description: 'Versatile cooking oil suitable for frying, sautéing, and various culinary applications.',
        price: 4.99,
        qty: 1
      },
      {
        id: 21,
        title: 'Cucumber',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png',
        description: 'Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.',
        price: 1.49,
        qty: 1
      },
      {
        id: 22,
        title: 'Dog Food',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png',
        description: 'Specially formulated dog food designed to provide essential nutrients for your canine companion.',
        price: 10.99,
        qty: 1
      },
      {
        id: 23,
        title: 'Eggs',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png',
        description: 'Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.',
        price: 2.99,
        qty: 1
      },
      {
        id: 24,
        title: 'Fish Steak',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png',
        description: 'Quality fish steak, suitable for grilling, baking, or pan-searing.',
        price: 14.99,
        qty: 1
      },
      {
        id: 25,
        title: 'Green Bell Pepper',
        thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png',
        description: 'Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.',
        price: 1.29,
        qty: 1
      },
    ],
    "total": 25,
  }
  let customers = [];
  let carts = [];
  let orders = [];
  let promocodes = {}; 
  
  // Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  
  // Authentication Middleware
  const authenticate = (req, res, next) => {
    const { customerid } = req.headers;
    if (customers.some(customer => customer.customerId === customerid)) {
      next();
    } else {
      res.status(401).json('Unauthorized');
    }
  };
  
  // Routes
  app.get('/products', (req, res) => {
    res.status(200).json(allProducts);
  });
  
  app.post('/signUp', (req, res) => {
    const { email, password } = req.body;
    if (customers.some((customer) => customer.email === email)) {
      return res.status(401).json("Email already exists");
    }
    const customerId = nanoid();
    customers.push({ customerId, email, password });
    carts.push({ customerId, items: [],total:0,couponCode:null });
    orders.push({ customerId, orders: [],date:[]});
    console.log(" customer sign Up ");
    res.status(200).json(customerId);
  });
  
  app.post('/signIn', (req, res) => {
    const { email, password } = req.body;
    const customer = customers.find(cust => cust.email === email && cust.password === password);
    if (customer) {
      res.status(200).json(customer.customerId);
    } else {
      console.log(" customer sign IN ");
      res.status(400).json("Either email or password is incorrect");
    }
  });

  app.post('/isCustomer', (req, res) => {
    const { customerid } = req.headers;
      const boolean=(customers.some((customer) => customer.customerId === customerid))
      console.log(" is cutomer ",boolean);
      return res.status(200).json(boolean);
  });
  
  app.post('/addToCart', authenticate, (req, res) => {
    const { customerid } = req.headers;
    const cart = carts.find(cart => cart.customerId === customerid);
    if (cart) {
      cart.items.push(req.body);
      cart.total+=parseFloat(req.body.qty)*parseFloat(req.body.price);
      console.log("carts ",carts);
      res.status(200).json("Item added to cart successfully");
    } else {
      res.status(404).json("Cart not found");
    }
  });
  
  app.post('/promocode', authenticate, (req, res) => {
    const promocode = nanoid();
    promocodes[promocode] = true;
    console.log(" promocode sent ");
    res.status(200).json(promocode);
  });
  
  app.post('/applyPromocode', authenticate, (req, res) => {
    const { promocode } = req.body;
    const { customerid } = req.headers;
    if (promocodes[promocode]) {
      const cart = carts.find(cart => cart.customerId === customerid);
      const order = orders.find(order => order.customerId === customerid);
      if ((order.orders.length+1)%2===0) {
          cart.total=(cart.total)*9/10;
          promocodes[promocode]=false;
          cart.couponCode=promocode;
          console.log(" promocodes ",promocodes);
        res.status(200).json(`Promocode applied: 10% discount`);
      } else {
        res.status(404).json("Promocode Not Applicable on This Order");
      }
    } else {
      res.status(400).json("Invalid promocode");
    }
  });
  
  app.post('/confirmOrder', authenticate, (req, res) => {
    const { customerid } = req.headers;
    const cart = carts.find(cart => cart.customerId === customerid);
    const order= orders.find(cart => cart.customerId === customerid)
    if (cart) {
      order.orders.push({...cart});
      order.date.push(new Date().toLocaleDateString());
      cart.items = [];
      cart.total=0;
      console.log("orders",orders,"carts",carts);
      res.status(200).json("Order placed successfully");
    } else {
      res.status(404).json("Cart not found");
    }
  });
  
  // View Cart
  app.get('/cart', authenticate, (req, res) => {
    const { customerid } = req.headers;
    const cart = carts.find(cart => cart.customerId === customerid);
    if (cart) {
      console.log("sent cart");
      res.status(200).json(cart);
    } else {
      res.status(404).json("Cart not found");
    }
  });
  
  // View Orders
  app.get('/orders', authenticate, (req, res) => {
    const { customerid } = req.headers;
    const userOrders = orders.find(order => order.customerId === customerid);
    console.log("got order request",userOrders,customerid);
    if (userOrders) {
      console.log("sent orders");
      res.status(200).json(userOrders);
    } else {
      console.log("order not found");
      res.status(404).json("Orders not found");
    }
  });
  
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

export {app};