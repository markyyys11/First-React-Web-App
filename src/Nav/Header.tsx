import React from "react";

interface HeaderProps {
  frameName: string;
}

export default function Header({ frameName }: HeaderProps) {
  return (
    <nav className="m-2 rounded navbar sticky-top shadow-sm bg-body-tertiary bg-opacity-25">
      <div className="container-fluid">
        <a className="text-primary-emphasis mx-auto navbar-brand" href="#">
          {frameName}
        </a>
      </div>
    </nav>
  );
}
