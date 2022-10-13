import HomeIcon from "../assets/icons/home.svg";
import products from "../assets/icons/products.svg";
import orders from "../assets/icons/orders.svg";

// import pos from "../assets/icons/pos.svg";

export const routes = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    childrens: [],
    expanded: true,
  },
  // {
  //   name: "POS",
  //   icon: pos,
  //   childrens: [
  //     {
  //       name: "Add Post",
  //       url: "/pos/add",
  //     },
  //   ],
  // },
  {
    name: "Orders",
    icon: orders,
    expanded: true,
    childrens: [
      {
        name: "All Orders",
        url: "/orders/list",
      },
      {
        name: "On Hold",
        url: "/orders/list",
        // url: "/",
      },
      {
        name: "Processing",
        url: "/orders",
      },
      {
        name: "Out For Delivery",
        url: "/orders",
      },
      {
        name: "Cancelled",
        url: "/orders",
      },
    ],
  },
  {
    name: "Products",
    icon: products,
    expanded: true,
    childrens: [
      {
        name: "Add New Product",
        url: "/products/add",
      },
      {
        name: "All Products",
        url: "/products/list",
      },
      {
        name: "Active Products",
        url: "/products/active",
      },
      {
        name: "Import/Export",
        url: "/products/export-import",
      },
    ],
  },
  // {
  //   name: "Categories",
  //   icon: categories,
  //   childrens: [
  //     {
  //       name: "Parent Categories",
  //       url: "/categories/list",
  //     },
  //     {
  //       name: "Sub Categories",
  //       url: "/sub-categories/list",
  //     },
  //   ],
  // },
  // {
  //   name: "Banners",
  //   icon: banners,
  //   expanded: true,
  //   childrens: [
  //     {
  //       name: "Add New Banner",
  //       url: "/banners/add",
  //     },
  //     {
  //       name: "List",
  //       url: "/banners/list",
  //     },
  //   ],
  // },
  // {
  //   name: "Coupons",
  //   icon: offers,
  //   childrens: [
  //     {
  //       name: "Add New Coupon",
  //       url: "/coupons/add",
  //     },
  //     {
  //       name: "Active",
  //       url: "/coupons/list",
  //     },
  //     {
  //       name: "InActive",
  //       url: "/coupons/inactive",
  //     },
  //     {
  //       name: "Expired",
  //       url: "/coupons/expired",
  //     },
  //     {
  //       name: "List",
  //       url: "/coupons/list",
  //     },
  //   ],
  // },
  // {
  //   name: "Branches",
  //   icon: branches,
  //   expanded: true,
  //   childrens: [
  //     {
  //       name: "Add New Branch",
  //       url: "/branches/add",
  //     },
  //     {
  //       name: "List",
  //       url: "/branches/list",
  //     },
  //   ],
  // },
  // {
  //   name: "Reports",
  //   icon: reports,
  //   childrens: [
  //     {
  //       name: "Earning Report",
  //       url: "/report/sales",
  //     },
  //     {
  //       name: "P/L Report",
  //       url: "/report/pl",
  //     },
  //     {
  //       name: "Product Report",
  //       url: "/report/product",
  //     },
  //   ],
  // },

  // {
  //   name: "Settings",
  //   icon: settings,
  //   childrens: [
  //     {
  //       name: "Legal Data",
  //       url: "/e",
  //     },
  //     {
  //       name: "Payment Methods",
  //       url: "/",
  //     },
  //     {
  //       name: "Time Slots",
  //       url: "/config/store/timings",
  //     },
  //     {
  //       name: "Store Config",
  //       url: "/config/store",
  //     },
  //     {
  //       name: "SMS Config",
  //       url: "/config/sms",
  //     },
  //     {
  //       name: "System Config",
  //       url: "/config/system",
  //     },
  // ],
  // },
];
