interface UserAvatarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  BgOrange: boolean;
}

export function UserAvatar({ open, setOpen, BgOrange }: UserAvatarProps) {
  return(
    <div className={`w-10 h-10 rounded-full ${BgOrange? 'bg-orange-500' : 'bg-white'} flex items-center justify-center text-xl`} onClick={() => setOpen(!open)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${BgOrange? 'text-white' : 'text-gray-700'}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"/>
      </svg>
    </div>
  );
}