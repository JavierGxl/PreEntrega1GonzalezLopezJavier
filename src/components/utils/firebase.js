import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "gonzalezlopezjavierreactjs.firebaseapp.com",
  projectId: "gonzalezlopezjavierreactjs",
  storageBucket: "gonzalezlopezjavierreactjs.appspot.com",
  messagingSenderId: "80458117829",
  appId: "1:80458117829:web:ec4aa3bb335eca5618f6ac",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const uploadDB = async () => {
  const promise = await fetch("../json/products.json");
  const items = await promise.json();
  items.forEach(async (item) => {
    await addDoc(collection(db, "items"), {
      idCategory: item.idCategory,
      Title: item.Title,
      Genre: item.Genre,
      Price: item.Price,
      Desc: item.Desc,
      Year: item.Year,
      Lang: item.Lang,
      stock: item.stock,
      img: item.img,
    });
  });
};

const getItem = async (id) => {
  const item = await getDoc(doc(db, "items", id));
  const prod = [item.id, item.data()];
  return prod;
};

const getItems = async () => {
  const products = await getDocs(collection(db, "items"));
  const items = products.docs.map((item) => [item.id, item.data()]);
  return items;
};

const createPurchaseOrder = async (
  finalPrice,
  name,
  surname,
  phoneNumber,
  mailAdress
) => {
  const purchaseOrder = await addDoc(collection(db, "purchaseOrder"), {
    name: name,
    surname: surname,
    phoneNumber: phoneNumber,
    mailAdress: mailAdress,
    totalprice: finalPrice,
  });
  return purchaseOrder;
};

const getPurchaseOrder = async (id) => {
  const purchaseOrder = await getDoc(doc(db, "purchaseOrder", id));
  return purchaseOrder;
};

export { uploadDB, getItems, getItem, createPurchaseOrder, getPurchaseOrder };
