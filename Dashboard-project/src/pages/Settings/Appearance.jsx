
export function Appearance(){    
return (
  <div className="mx-4 mt-6 bg-gray-100 rounded-xl p-6">
    <h2 className="font-bold text-xl mb-6">Appearance</h2>

    {/* Theme */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">Theme</h3>

      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="theme" />
          Light
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="theme" />
          Dark
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="theme" />
          System
        </label>
      </div>
    </div>

    {/* Font Size */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">Font size</h3>

      <select className="border px-4 py-2 rounded-xl">
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
    </div>

    {/* Layout */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">Layout</h3>

      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="layout" />
          Comfortable
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="layout" />
          Compact
        </label>
      </div>
    </div>

    {/* Accent Color */}
    <div className="mb-6">
      <h3 className="font-semibold mb-3">Accent color</h3>

      <div className="flex gap-3">
        <div className="w-6 h-6 rounded-full bg-blue-600 cursor-pointer"></div>
        <div className="w-6 h-6 rounded-full bg-green-600 cursor-pointer"></div>
        <div className="w-6 h-6 rounded-full bg-red-600 cursor-pointer"></div>
        <div className="w-6 h-6 rounded-full bg-purple-600 cursor-pointer"></div>
      </div>
    </div>

    <button className="bg-blue-700 text-white px-6 py-2 rounded-xl">
      Save appearance
    </button>
  </div>
);
}