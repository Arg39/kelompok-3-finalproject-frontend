import React from "react";
import DataTable from "react-data-table-component";

export default function Table({ dataColumns, data, isLoading }) {
  const columns = dataColumns.map((col) => {
    if (col.type === "image") {
      return {
        name: col.name,
        selector: col.selector,
        cell: (row) => (
          <div className="flex justify-center">
            <img
              className="max-h-40"
              src={row[col.selector]}
              alt={row[col.alt || col.selector]}
            />
          </div>
        ),
        maxWidth: col.maxWidth || "auto",
      };
    } else if (col.type === "actions") {
      return {
        name: col.name,
        cell: (row) => (
          <div className="flex justify-center py-2 space-x-4">
            {col.actions.map((action, index) => (
              <button
                key={index}
                className={`${action.className} py-2 px-4 rounded-xl`}
                onClick={() => action.onClick(row.id)}
              >
                {action.label}
              </button>
            ))}
          </div>
        ),
        maxWidth: col.maxWidth || "auto",
      };
    } else {
      return {
        name: col.name,
        sortable: col.sortable,
        selector: col.selector ? (row) => row[col.selector] : undefined,
        cell: col.cell
          ? col.cell
          : (row) => (
              <span className="text-center text-base">{row[col.selector]}</span>
            ),
        maxWidth: col.maxWidth || "auto",
        sortFunction: col.sortable
          ? (rowA, rowB) => rowA[col.selector] - rowB[col.selector]
          : undefined,
      };
    }
  });

  return (
    <div className="p-2 mt-2">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          pagination
          highlightOnHover
          responsive
          striped
          dense
          className="border border-gray-200 rounded-lg shadow-md mx-auto"
          customStyles={{
            headRow: {
              style: {
                fontSize: "1rem",
                fontWeight: "semibold",
                paddingTop: "8px",
                paddingBottom: "8px",
              },
            },
          }}
        />
      )}
    </div>
  );
}
