import {  XAxis,AreaChart,Area, Tooltip, ResponsiveContainer,} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

export function Cards (){
  const [cards ,setCards]=useState([])
  useEffect(()=>{
    const fetchCards=async()=>{
      try{
        const response=await axios("/api/charts")
        setCards(response.data.data)
        console.log(response.data.data)
      } 
      catch(error){
        console.error("error fetching cards",error)
      }
    }
    fetchCards()
  },[])

    return (
        <>
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
           {
            cards.map((card)=>{
              return(
            
    <button className={`${card.gradient} flex justify-between ${card.rowSpan} ${card.height} p-4 text-white border-none `}>
              <div className="flex w-full flex-col justify-between h-full items-start">
                <div className="flex flex-col items-start">
                  <div>{card.title}</div>
                  <div>{card.total}</div>
                </div>
                <div className="h-64 w-full border-none rounded-lg flex items-center justify-center text-gray-400">
                  <ResponsiveContainer width="100%" height={120}>
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
              <div className="flex items-start">
                <a className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </div>
            </button>
              )
            })
           }
        
           
          </div>
        </>
    )
}