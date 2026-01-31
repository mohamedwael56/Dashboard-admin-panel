
export function Notifications(){    
   return (
  <div className="mx-4 mt-6 bg-gray-100 rounded-xl p-6">
    <h2 className="font-bold text-xl mb-6">Notifications</h2>

    {/* General */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">General</h3>

      <label className="flex items-center gap-3 mb-2">
        <input type="checkbox" />
        Email notifications
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        In-app notifications
      </label>
    </div>

    {/* Security */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">Security alerts</h3>

      <label className="flex items-center gap-3 mb-2">
        <input type="checkbox" />
        New login detected
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Password changed
      </label>
    </div>

    {/* Activity */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">Activity</h3>

      <label className="flex items-center gap-3 mb-2">
        <input type="checkbox" />
        Comments
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Mentions
      </label>
    </div>

    {/* System */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">System</h3>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Platform updates
      </label>
    </div>

    <button className="bg-blue-700 text-white px-6 py-2 rounded-xl">
      Save preferences
    </button>
  </div>
)

}