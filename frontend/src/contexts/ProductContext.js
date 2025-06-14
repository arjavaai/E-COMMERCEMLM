import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['Smart Formulas', 'Prime Formulas', 'Popular Products', 'Business Tools']);
  const [loading, setLoading] = useState(true);

  // Initialize products with mock data if Firestore is empty
  const initializeProducts = async () => {
    try {
      const productsRef = collection(db, 'products');
      const snapshot = await getDocs(productsRef);
      
      if (snapshot.empty) {
        // Add mock products to Firestore
        const mockProducts = [
          // Smart Formulas
          {
            name: "SMART LEAN PRO FORMULA",
            type: "Combo Pack",
            category: "Smart Formulas",
            mrp: 8997.00,
            prime: 6999.00,
            image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb",
            description: "Advanced lean muscle formula for optimal body composition",
            inStock: true,
            stockQuantity: 50
          },
          {
            name: "SMART BEYONIQUE FORMULA",
            type: "Combo Pack",
            category: "Smart Formulas",
            mrp: 8700.00,
            prime: 6999.00,
            image: "https://images.unsplash.com/photo-1583564992049-a786281d6add",
            description: "Premium beauty and wellness supplement",
            inStock: true,
            stockQuantity: 30
          },
          {
            name: "SMART WIZFAP FORMULA",
            type: "Combo Pack",
            category: "Smart Formulas",
            mrp: 9537.00,
            prime: 6999.00,
            image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg",
            description: "Comprehensive health and vitality formula",
            inStock: true,
            stockQuantity: 25
          },
          {
            name: "SMART HALE O FORMULA",
            type: "Combo Pack",
            category: "Smart Formulas",
            mrp: 7998.00,
            prime: 6999.00,
            image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb",
            description: "Holistic health optimization supplement",
            inStock: true,
            stockQuantity: 40
          },
          {
            name: "SMART MALE X FORMULA",
            type: "Combo Pack",
            category: "Smart Formulas",
            mrp: 9000.00,
            prime: 6999.00,
            image: "https://images.unsplash.com/photo-1583564992049-a786281d6add",
            description: "Male health and performance enhancement",
            inStock: true,
            stockQuantity: 35
          },
          {
            name: "SMART FORMULA",
            type: "Combo Pack",
            category: "Smart Formulas",
            mrp: 8499.00,
            prime: 6999.00,
            image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg",
            description: "All-in-one smart health solution",
            inStock: true,
            stockQuantity: 45
          },
          // Prime Formulas
          {
            name: "MALE X FORMULA KIT",
            type: "Pack of 4",
            category: "Prime Formulas",
            mrp: 7500.00,
            prime: 5250.00,
            image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb",
            description: "Complete male health optimization kit",
            inStock: true,
            stockQuantity: 20
          },
          {
            name: "HALE O KIT",
            type: "Pack of 4",
            category: "Prime Formulas",
            mrp: 7148.00,
            prime: 5000.00,
            image: "https://images.unsplash.com/photo-1583564992049-a786281d6add",
            description: "Comprehensive wellness package",
            inStock: true,
            stockQuantity: 15
          },
          {
            name: "NEW DO COMBO",
            type: "Combo Pack",
            category: "Prime Formulas",
            mrp: 4950.00,
            prime: 3500.00,
            image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg",
            description: "Revolutionary health combo package",
            inStock: true,
            stockQuantity: 30
          },
          {
            name: "HALE O",
            type: "1 Box",
            category: "Prime Formulas",
            mrp: 3999.00,
            prime: 2800.00,
            image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb",
            description: "Individual HALE O supplement box",
            inStock: true,
            stockQuantity: 60
          },
          {
            name: "BEYONIQUE COMBO",
            type: "Pack of 3",
            category: "Prime Formulas",
            mrp: 4950.00,
            prime: 3500.00,
            image: "https://images.unsplash.com/photo-1583564992049-a786281d6add",
            description: "Beauty and wellness trio pack",
            inStock: true,
            stockQuantity: 25
          },
          // Popular Products
          {
            name: "WIZFAP",
            type: "1 Box",
            category: "Popular Products",
            mrp: 1999.00,
            prime: 1299.00,
            image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg",
            description: "Popular health enhancement supplement",
            inStock: true,
            stockQuantity: 80
          },
          {
            name: "ADVANCE ABCD HEALTH",
            type: "1 Box",
            category: "Popular Products",
            mrp: 2499.00,
            prime: 1899.00,
            image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb",
            description: "Advanced multi-vitamin complex",
            inStock: true,
            stockQuantity: 70
          },
          {
            name: "REACTIVATE",
            type: "1 Box",
            category: "Popular Products",
            mrp: 2999.00,
            prime: 1799.00,
            image: "https://images.unsplash.com/photo-1583564992049-a786281d6add",
            description: "Energy and vitality booster",
            inStock: true,
            stockQuantity: 55
          },
          {
            name: "LEAN PRO",
            type: "1 Box",
            category: "Popular Products",
            mrp: 2995.00,
            prime: 1799.00,
            image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg",
            description: "Professional lean muscle support",
            inStock: true,
            stockQuantity: 65
          },
          {
            name: "CURCUMUNITY",
            type: "1 Box",
            category: "Popular Products",
            mrp: 1999.00,
            prime: 1000.00,
            image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb",
            description: "Natural immunity booster with turmeric",
            inStock: true,
            stockQuantity: 90
          },
          {
            name: "MALE X FORMULA",
            type: "1 Box",
            category: "Popular Products",
            mrp: 3999.00,
            prime: 2999.00,
            image: "https://images.unsplash.com/photo-1583564992049-a786281d6add",
            description: "Single box male enhancement formula",
            inStock: true,
            stockQuantity: 45
          },
          // Business Tools
          {
            name: "EXECUTIVE BAG",
            type: "1 Bag",
            category: "Business Tools",
            mrp: 1699.00,
            prime: 1299.00,
            image: "https://images.pexels.com/photos/4098340/pexels-photo-4098340.jpeg",
            description: "Professional executive carrying bag",
            inStock: true,
            stockQuantity: 20
          },
          {
            name: "EXECUTIVE PEN",
            type: "1 Pen",
            category: "Business Tools",
            mrp: 150.00,
            prime: 100.00,
            image: "https://images.pexels.com/photos/4098340/pexels-photo-4098340.jpeg",
            description: "Premium business writing instrument",
            inStock: true,
            stockQuantity: 100
          },
          {
            name: "PRODUCT CATALOGUE",
            type: "1 Book",
            category: "Business Tools",
            mrp: 150.00,
            prime: 120.00,
            image: "https://images.pexels.com/photos/4098340/pexels-photo-4098340.jpeg",
            description: "Comprehensive product information catalog",
            inStock: true,
            stockQuantity: 50
          }
        ];

        // Add each product to Firestore
        for (const product of mockProducts) {
          await addDoc(collection(db, 'products'), {
            ...product,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
        }
      }
    } catch (error) {
      console.error('Error initializing products:', error);
    }
  };

  // Fetch products from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const productsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsList);
      setLoading(false);
    });

    // Initialize products if needed
    initializeProducts();

    return () => unsubscribe();
  }, []);

  const addProduct = async (product) => {
    try {
      const docRef = await addDoc(collection(db, 'products'), {
        ...product,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  const updateProduct = async (productId, updates) => {
    try {
      await updateDoc(doc(db, 'products', productId), {
        ...updates,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, 'products', productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  const value = {
    products,
    categories,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    getProductById
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};