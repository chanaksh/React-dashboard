import { useEffect, useState } from "react";
import "./Table.css";
import DataTable from "react-data-table-component";

function Tables() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => setData(obj.posts));
  }, []);

  const handleDeleteSelected = () => {
    const idsToDelete = new Set(selectedRows.map((row) => row.id));
    const updatedData = data.filter((item) => !idsToDelete.has(item.id));
    setData(updatedData);
    setSelectedRows([]);
  };

  const handleRowSelected = (state) => {
    setSelectedRows(state.selectedRows);
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      width: "400px",
    },
    {
      name: "Likes",
      selector: (row) => row.reactions.likes,
      sortable: true,
    },
    {
      name: "Dislikes",
      selector: (row) => row.reactions.dislikes,
      sortable: true,
    },
    {
      name: "Views",
      selector: (row) => row.views,
      sortable: true,
    },
  ];

  return (
    <div className="tables">
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={handleRowSelected}
        // fixedHeader
        pagination
        className="tabel"
      />
      <button
        className="deleteButton"
        onClick={handleDeleteSelected}
        disabled={selectedRows.length === 0}
      >
        Delete Selected
      </button>
    </div>
  );
}

export default Tables;
