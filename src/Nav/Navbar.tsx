import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  items: Array<{
    path: string;
    navIcon: string;
  }>;
  selectedIndex: number;
  onSelect: (index) => void;
}

export default function Navbar({
  items,
  selectedIndex,
  onSelect: onSelect,
}: NavbarProps) {
  return (
    <footer className="sticky-bottom p-3">
      <div>
        <nav className="nav nav-pills nav-fill gap-3">
          {items.map((value, index) => {
            return (
              <li
                className="nav-item border rounded-3 bg-body-tertiary bg-opacity-25 shadow-sm"
                key={index}
              >
                <Link
                  to={value.path}
                  className={
                    "nav-link " +
                    [
                      selectedIndex === index
                        ? "active "
                        : "text-primary-emphasis",
                    ]
                  }
                  onClick={() => {
                    onSelect(index);
                  }}
                >
                  {value.path}
                </Link>
              </li>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
