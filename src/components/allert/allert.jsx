import React from "react";

export default function Allert(props) {
  return (
    <div>
      <div
        class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p class="font-bold">Error message</p>
        <p class="text-sm">{props.message}.</p>
      </div>
    </div>
  );
}
