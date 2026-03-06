import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Кросівки чоловічі",
      description: "Кросівки замш сітка 591819 Сірі.",
      price: 1800,
      image: "https://sezon.ua/image/catalog/image/easyfoto/19316/krossovki-zhenskie-zamsh-591819-serye-1.jpg",
    },
    {
      id: 2,
      name: "Комплект 3 в 1 ",
      description: "Комплект 3 в 1 весняний чоловічий | Кофта з капюшоном на змійці + Штани спортивні + Футболка чорна.",
      price: 2900,
      image: "https://images.prom.ua/6561661246_komplekt-3-v.jpg",
    },
    {
      id: 3,
      name: "Чоловіча кофта",
      description: "Лонгслів чоловічий White.",
      price: 2000,
      image: "https://i0.wp.com/tabooclothes.com.ua/wp-content/uploads/2024/02/36.webp?resize=500%2C750&ssl=1",
    },
    {
      id: 4,
      name: "Бейсболка",
      description: "Polo Ralph Lauren",
      price: 7200,
      image: "https://res.cloudinary.com/kameron/image/upload/f_auto,q_auto,c_fill,h_1235,w_1000/buqsj7jhu0dn5osvod2h.WebP",
    },
    {
      id: 5,
      name: "Годинник",
      description: "TAG Heuer Carrera Chronograph CBN2A1A.BA0643",
      price: 25333,
      image: "https://fs9.deka.ua/photo/goods/popup/111/450579/tag-heuer-carrera-cbn2a1aba0643-450579-1.jpg",
    },
    {
      id: 6,
      name: "Срібний браслет",
      description: "ЧЩоб визначити розмір вашого браслета, ми рекомендуємо вимірювати розмір вашого зап'ястя, а не розмір іншого браслета.",
      price: 5900,
      image: "https://reytel.ua/image/cache/catalog/image/cache/catalog/Product/%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D0%B8/1196285---1412%D0%B1/1196285_--941x941.webp",
    },
    {
      id: 7,
      name: "Рюкзак ",
      description: "Водонепроницаемый рюкзак от Nike. ",
      price: 12450,
      image: "https://lispo.com.ua/-/uploads/ua/00/06/10/43/page-2629753255.jpg",
    },
    {
      id: 8,
      name: "Повербанк 20000 mAh ",
      description: "PowerMe MyCharge зі вбудованими кабелями та LED-ліхтариком.",
      price: 1900,
      image: "https://likemart.com.ua/content/images/29/750x752l80mc0/57998573813382.webp",
    },
    {
      id: 9,
      name: "VEZZOLA - Crossbody",
      description: "	Чоловічі сумки",
      price: 1540,
      image: "https://bag-bag.com.ua/content/images/4/465x670l95nn0/35976076463344.webp",
    },
    {
      id: 10,
      name: "Чоловічий Браслет",
      description: "BROWN&BlACK+LION ONYX.",
      price: 1090,
      image: "https://mcgregorjewelry.com/wp-content/uploads/2020/09/Braslets-01.jpg",
    },
  ],
};




const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateProduct(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setProducts(state, action) {
      state.items = action.payload;
      state.status = "succeeded";
    },
    setLoading(state) {
      state.status = "loading";
    },
    setError(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateProduct,
  setProducts,
  setLoading,
  setError,
} = productsSlice.actions;

export default productsSlice.reducer;
