import {  useState } from "react"
import './Settings.css'
export function Notifications(){  
  const saved = JSON.parse(localStorage.getItem('checked'))
  const [email,setEmail]=useState(saved.email)
  const [inApp,setInApp]=useState(saved.inApp)
  const [newLogin,setNewLogin]=useState(saved.newLogin)
  const [password,setPassword]=useState(saved.password)
  const [comments,setComments]=useState(saved.comments)
  const [mentions,setMentions]=useState(saved.mentions)
  const [updates,setUpdates]=useState(saved.updates)
const savePreferences=()=>{
      const checked = {
email,
inApp,
newLogin,
password,
comments,
mentions,
updates
  }

  localStorage.setItem('checked',JSON.stringify(checked))


}
  
   return (
  <div className="mx-4 mt-6 bg-gray-100 rounded-xl p-6">
    <h2 className="font-bold text-xl mb-6">Notifications</h2>

    <div className="mb-6">
      <h3 className="font-semibold mb-3">General</h3>

      <label className="flex items-center gap-3 mb-2">
        <input type="checkbox"
         checked={email}
         onChange={(e)=>{setEmail(e.target.checked)}} />
        Email notifications
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox"
        checked={inApp}
        onChange={(e)=>{setInApp(e.target.checked)}} />
        In-app notifications
      </label>
    </div>

    <div className="mb-6">
      <h3 className="font-semibold mb-3">Security alerts</h3>

      <label className="flex items-center gap-3 mb-2">
        <input type="checkbox" 
         checked={newLogin}
         onChange={(e)=>{setNewLogin(e.target.checked)}}/>
        New login detected
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox"
        checked={password}
         onChange={(e)=>{setPassword(e.target.checked)}}/>
        Password changed
      </label>
    </div>

    <div className="mb-6">
      <h3 className="font-semibold mb-3">Activity</h3>

      <label className="flex items-center gap-3 mb-2">
        <input type="checkbox"
        checked={comments}
        onChange={(e)=>{setComments(e.target.checked)}} />
        Comments
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox"
        checked={mentions}
        onChange={(e)=>{setMentions(e.target.checked)}} />
        Mentions
      </label>
    </div>

    {/* System */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">System</h3>

      <label className="flex items-center gap-3">
        <input type="checkbox"
        checked={updates}
        onChange={(e)=>{setUpdates(e.target.checked)}} />
        Platform updates
      </label>
    </div>

    <button type="submit" onClick={savePreferences} className="bg-blue-700 text-white px-6 py-2 rounded-xl">
      Save preferences
    </button>
  </div>
)

}