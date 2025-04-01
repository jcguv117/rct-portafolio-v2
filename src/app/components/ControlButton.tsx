import { Icons } from '@/assets/icons';
import React from 'react'

interface ControlButton {
    icon     : keyof typeof Icons;
    url      : string;
    tooltip? : string;
}

export const ControlButton: React.FC<ControlButton> = ({icon, tooltip, url}) => {
    const handleOpenURL = (url: string) => {
        url && window.open(url, '_blank', 'noopener,noreferrer');
      }

      const Icon = icon ? Icons[icon] : undefined;

  return (
    <button 
        className="group cursor-pointer relative inline-flex items-center justify-center text-3xl p-2 rounded-full bg-gradient-to-r from-zinc-600 to-slate-600 select-none" 
        onClick={() => handleOpenURL(url)}
        >
        <div className="text-gray-300 hover:tooltip hover:tooltip-open hover:tooltip-right stroke-0">
        { Icon && <Icon size={16} className="w-5 h-5 fill-gray-300" /> }
        <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
            <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2" >
            <div className="rounded-sm bg-black py-1 px-2">
                <p className="whitespace-nowrap">{tooltip}</p>
            </div>
            <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
            </div>
        </div>
        </div>
    </button>
  )
}

