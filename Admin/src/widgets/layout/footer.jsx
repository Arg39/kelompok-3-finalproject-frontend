import React from "react";
export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 ">
        <h1>©2024 RENT ID. All Rights Reserved.</h1>
      </div>
    </footer>
  );
}


Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
