import { Icons } from "@/assets/icons";

interface HoverButton {
    label       : string;
    classColor  : string;
    link?       : string;
    icon?       : keyof typeof Icons;
    callback?   : any;
}


export const HoverButton: React.FC<HoverButton> = ({
    label, 
    classColor, 
    link,
    icon,
    callback
}) => {
    const Icon = icon ? Icons[icon] : undefined;
    const openURL = (url: string) => {
        url && window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <button
          className={"group flex items-center justify-start w-12 h-11 rounded-full cursor-pointer relative overflow-hidden transition-all gap-x-5 duration-200 shadow-lg hover:w-48 active:translate-x-1 active:translate-y-1 bg-black " + classColor}
          onClick={() => link ? openURL(link) : callback() }
        >
          <div
            className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              { Icon && <Icon size={16} className="w-5 h-5 fill-white" /> }
          </div>
          <div
            className="absolute left-10 ml-1 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            {label}
          </div>
        </button>
      );
}
