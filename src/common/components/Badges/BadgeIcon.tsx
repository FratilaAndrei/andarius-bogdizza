import React, { FC } from "react";

type BadgeIconProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  icon: React.ReactNode;
  children?: number;
};

const BadgeIcon: FC<BadgeIconProps> = ({ children, onClick, icon }) => {
  return (
    <div
      className="relative cursor-pointer p-1 hover:scale-125 hover:rounded-full hover:bg-logoColor"
      onClick={onClick}
    >
      {icon}
      <div className="absolute -right-1 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-black px-1 text-sm text-white">
        {children}
      </div>
    </div>
  );
};

export default BadgeIcon;
