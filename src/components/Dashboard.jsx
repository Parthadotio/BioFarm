import React from 'react'

const Dashboard = () => {
  return (
    <main className="flex h-dvh w-full bg-slate-300">
      <div className="flex p-2 gap-2 h-full w-full">
        <div className="left w-50 bg-stone-100 border-2 border-white rounded-md p-2">
          <h4 className="font-inconsolata text-blue-500">BioFarm</h4>
          <h3 className="pt-3 text-xs text-blue-500">Menu</h3>
          <div className="flex flex-col pt-2">
            <div className="flex items-center gap-2">
              <i className="ri-home-smile-2-line text-xl"></i>
              <h4>Dasboard</h4>
            </div>
            <div></div>
            <div></div>
            <div className='flex  items-center gap-2'>
              <i class="ri-settings-4-fill"></i>
              <h4>Settings</h4>
            </div>
          </div>
        </div>
        <div className="right h-full flex-1 bg-transparent border-2 border-white rounded-md">
          right
        </div>
      </div>
    </main>
  );
}

export default Dashboard
