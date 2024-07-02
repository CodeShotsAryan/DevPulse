import React from "react";


export const SidebarLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div>
        <div>Welcome to DevPulse Application</div>
      {children}
    </div>
  );
};

export default SidebarLayout;