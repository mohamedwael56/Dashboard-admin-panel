import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../components/Products";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import {
  BarChart,
  Bar,
  XAxis,
  AreaChart,
  Area,
  LineChart,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  Line,
} from "recharts";

export function Home() {
  const data = [
    { name: "Jan", users: 100, orders: 90 , products: 10  , reviews: 10, sales:10000 },
    { name: "Feb", users: 700, orders: 280, products: 100 , reviews: 50, sales:18000 },
    { name: "Mar", users: 200, orders: 180, products: 500 , reviews: 100, sales:1000  },
    { name: "Apr", users: 900, orders: 538, products: 1000, reviews: 165, sales:25300 },
  ];

  return (
    <>
      <Header />
      <div className="flex min-h-screen mt-15">
        <SideBar />
        <main className="flex-1 p-6 m-7  w-screen">
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <button className="flex justify-between h-64 row-span-2 bg-gradient-to-r from-green-700 to-green-300 p-4 text-white border-none ">
              <div className="flex w-full flex-col justify-between h-full items-start">
                <div className="flex flex-col items-start">
                  <div>Total Users</div>
                  <div>277</div>
                </div>
                <div className="h-64 w-full border-none rounded-lg flex items-center justify-center text-gray-400">
                  <ResponsiveContainer width="100%" height={120}>
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient
                          id="usersGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#fff"
                            stopOpacity={0.4}
                          />
                          <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>

                      <XAxis dataKey="name" hide />

                      <Tooltip
                        contentStyle={{
                          background: "#111",
                          border: "none",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                        cursor={{ stroke: "rgba(255,255,255,0.2)" }}
                      />

                      <Area
                        type="monotone"
                        dataKey="users"
                        stroke="#fff"
                        fill="url(#usersGradient)"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div >
                  <span>+95% </span>
                  <span>last month</span>
                </div>
              </div>
              <div className="flex items-start">
                <a className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </div>
            </button>
            <button class="flex justify-between h-64 row-span-2 bg-gradient-to-r from-pink-500 to-pink-300 p-4 text-white">
              <div className="flex w-full flex-col justify-between h-full items-start">
                <div className="flex flex-col items-start">
                  <div>Total orders</div>
                  <div>338</div>
                </div>
                <div className="h-64 w-full rounded-lg flex items-center justify-center text-gray-400">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                    <defs>
                      <linearGradient
                      id="ordersGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                      >
                        <stop offset="5%" stopColor="#fff" stopOpacity="0.4" />
                        <stop offset="95%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                      <XAxis dataKey="name" hide />
                      <Tooltip
                        contentStyle={{
                          background: "#111",
                          color: "#fff",
                          border: "none",
                          borderRadius: "10px",
                        }}
                      />
                      <Area
                        dataKey="orders"
                        type="monotone"
                        stroke="#fff"
                        dot={false}
                        strokeWidth={3}
                        fill="url(#ordersGradient)"
                        radius={[6, 6, 0, 0]}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <span>+30% </span>
                  <span>last month</span>
                </div>
              </div>
              <div>
                <a href="#" className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </div>
            </button>
            <button class=" capitalize row-span-4 bg-gradient-to-r from-blue-500 to-blue-200 p-6 text-white flex flex-col gap-2 items-start">
              <div className="flex items-start flex-col h-full w-full justify-between">
                <div>
                  <div className="mb-1 capitalize">total sales</div>
                  <div>$25,300</div>
                </div>
                <div className="h-64 w-full text-gray-400">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                    <defs>
                      <linearGradient
                      id="salesGradient"
                      y1="0"
                      x1="0"
                      x2="0"
                      y2="1"
                      >
                      <stop offset="5%" stopColor="#fff" stopOpacity="0.4" />
                      <stop offset="95%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                      <XAxis dataKey="name" hide />
                      <Tooltip contentStyle={{
                        background:"#000",
                        color:"#fff",
                        border:"none",
                        borderRadius:"10px"
                      }} />
                      <Area dataKey="sales"
                      dot={false}
                      strokeWidth={3}
                      stroke="#fff"
                      type="monotone"
                      fill="url(#salesGradient)"
                      radius={[6, 6, 0, 0]} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <span>+55% </span>
                  <span>last month</span>
                </div>
              </div>
            </button>
            <button class="flex justify-between row-span-2 bg-gradient-to-r from-blue-700 to-blue-300 p-4 text-white">
              <div className="flex flex-col w-full justify-between items-start">
                <div className="flex flex-col items-start">
                  <div>Total products</div>
                  <div>557</div>
                </div>
                <div className="h-32 w-full rounded-lg flex items-center justify-center text-gray-400">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                    <defs>
                      <linearGradient
                      id="productsGradient"
                      y1="0"
                      y2="1"
                      x1="0"
                      x2="0">
                        <stop stopColor="#fff" offset="5%" stopOpacity="0.4" />
                        <stop stopColor="#fff" offset="95%" stopOpacity="0" />

                      </linearGradient>
                    </defs>
                      <XAxis dataKey="name" hide />
                      <Tooltip contentStyle={{
                        color:"white",
                        background:"black",
                        border:"none",
                        borderRadius:"10px"
                      }} />
                      <Area dataKey="products"
                      type="monotone"
                      stroke="#fff"
                      strokeWidth={3}
                      fill="url(#productsGradient)"
                      radius={[6, 6, 0, 0]} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <span>+25% </span>
                  <span>last month</span>
                </div>
              </div>
              <div>
                <a href="#" className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faBagShopping} />
                </a>
              </div>
            </button>
            <button class=" flex justify-between h-64 row-span-2 bg-gradient-to-r from-amber-500 to-amber-200 p-4 text-white">
              <div className="flex flex-col w-full justify-between items-start">
                <div className="flex flex-col items-start">
                  <div>Total reviews</div>
                  <div>165</div>
                </div>
                <div className="h-64 w-full rounded-lg flex items-center justify-center text-gray-400">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                    <defs>
                      <linearGradient 
                      id="reviewsGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                      >
                        <stop offset="5%" stopColor="white" stopOpacity="0.4" />
                        <stop offset="95%" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                      <XAxis dataKey="name" hide />
                      <Tooltip contentStyle={{
                        background:"black"
                        , color:"white",
                        border:"none",
                        borderRadius:"10px"
                      }} />
                      <Area 
                      dataKey="reviews"
                      type="monotone"
                      dot={false}
                      stroke="white"
                      strokeWidth={3}
                      fill="url(#reviewsGradient)"
                      radius={[6, 6, 0, 0]}
                         />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <span>+45% </span>
                  <span>last month</span>
                </div>
              </div>
              <div>
                <a href="#" className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faBagShopping} />
                </a>
              </div>
            </button>
          </div>

          <div className="capitalize mt-8 bg-gray-100 rounded-2xl  ">
            <div className="flex flex-col items-start p-5">
              <div className="text-xl mb-5">Best Selling Products</div>
              <div className="w-full grid grid-cols-4 gap-4  ">
                <div>showed by</div>
                <div>category by</div>
                <div>brand by</div>
                <div>search by</div>

                <div>
                  <select className="bg-gray-200 p-2">
                    <option value="10">row 10</option>
                    <option value="20">row 20</option>
                    <option value="50">row 50</option>
                    <option value="100">row 100</option>
                  </select>
                </div>
                <div>
                  <select className="bg-gray-200 p-2">
                    <option value="men">men</option>
                    <option value="women">women</option>
                  </select>
                </div>
                <div>
                  <select className="bg-gray-200 p-2">
                    <option value="ecstasy">ecstasy</option>
                    <option value="H&M">H&M</option>
                  </select>
                </div>
                <div>
                  <input
                    className="bg-gray-200 p-2 border-none rounded-lg"
                    type="text"
                    name=""
                    id=""
                    placeholder="id/name/category/brand"
                  />
                </div>
              </div>
            </div>
          </div>

          <Product />
        </main>
      </div>
    </>
  );
}
