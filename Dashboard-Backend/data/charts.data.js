
const charts = [
  
   {
    key: "orders",
    title: "Orders",
    total: 860,
    percentChange: 8,
    rowSpan: "row-span-1",
    height: "h-64",
    gradient: "bg-gradient-to-r from-green-700 to-green-300",
    data: [
       {name: "Jan", value: 120},
       {name: "Feb", value: 140},
       {name: "Mar", value: 160},
       {name: "Apr", value: 130},
       {name: "May", value: 150},
       {name: "Jun", value: 160},
    ],
  },

   {
    key: "users",
    title: "Users",
    total: 5400,
    percentChange: 15,
    rowSpan: "row-span-1",
    height: "h-64",
    gradient: "bg-gradient-to-r from-pink-500 to-pink-300",
    data: [
      {name: "Jan", value: 500},
      {name: "Feb", value: 800},
      {name: "Mar", value: 1200},
      {name: "Apr", value: 1800},
      {name: "May", value: 2500},
      {name: "Jun", value: 3500},
    ],
  },

   {
    key: "sales",
    title: "Sales",
    total: 125000,
    percentChange: 12,
    rowSpan: "row-span-2",
     height: "h-128",
    currency: "EGP",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-200",
    
      data: [
        {name: "Jan", value: 12000},
        {name: "Feb", value: 18000},
        {name: "Mar", value: 22000},
        {name: "Apr", value: 20000},
        {name: "May", value: 23000},
        {name: "Jun", value: 30000},
      ],
    
  },

   {
    key: "products",
    title: "Products",
    total: 320,
    percentChange: -5,
    rowSpan: "row-span-1",
    height: "h-64",
     gradient: "bg-gradient-to-r from-blue-700 to-blue-300",
     data: [
      {name:"Electronics" , value:120},
      {name:"Clothing" , value:80},
      {name:"Home" , value:70},
      {name:"Beauty" , value:50},
      {name:"Sports" , value:30},
    ],
  },

   {
    key: "reviews",
    title: "Reviews",
    total: 1450,
    percentChange: 20,
    rowSpan: "row-span-1",
    height: "h-64",
    gradient: "bg-gradient-to-r from-amber-500 to-amber-200",
    data : [
      {name:"5 Stars", value:800},
      {name:"4 Stars", value:400},
      {name:"3 Stars", value:150},
      {name:"2 Stars", value:70},
      {name:"1 Star", value:30},
    ],
  },

 
];

module.exports = charts;
