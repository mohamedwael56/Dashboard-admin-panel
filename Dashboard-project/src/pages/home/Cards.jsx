import {  XAxis,AreaChart,Area, Tooltip, ResponsiveContainer,} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'

export function Cards (){
              const gradientClasses={
              green:"bg-gradient-to-r from-green-700 to-green-300",
              blue:"bg-gradient-to-r from-blue-500 to-blue-200",
              amber:"bg-gradient-to-r from-amber-500 to-amber-200",
              pink:"bg-gradient-to-r from-pink-500 to-pink-300",
              lightBlue:"bg-gradient-to-r from-blue-700 to-blue-300",
            }

  const [cards ,setCards]=useState([])
  useEffect(()=>{
    const fetchCards=async()=>{
      try{
        const response=await axios("/api/charts")
        setCards(response.data.data)
      } 
      catch(error){
        console.error("error fetching cards",error)
      }
    }
    fetchCards()
  },[])

    return (
        <>
              <div className=" w-full cards grid grid-cols-3 grid-rows-2 gap-4">
        
           {
            
            cards.map((card)=>{
              
              return(
            
    <button key={card.key} className={`cards-size ${gradientClasses[card.gradient]} flex justify-between ${card.height} ${card.key==='sales'?'row-span-2': 'row-span-1'} p-4 text-white border-none `}>
              <div className="flex w-full flex-col justify-between h-full items-start">
                <div className="flex flex-col items-start">
                  <div>{card.title}</div>
                  <div>{card.total}</div>
                </div>
                <div className="cards-charts h-64  w-full border-none rounded-lg flex items-center justify-center text-gray-400">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={card.data}>
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
                        dataKey="value"
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
                  <span>{card.percentChange}% </span>
                  <span>last month</span>
                </div>
              </div>
             
            </button>
              )
            })
           }
        
           
          </div>
        </>
    )
}