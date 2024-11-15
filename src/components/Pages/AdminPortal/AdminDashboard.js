import React from "react";
import { useState } from "react";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from "chart.js";
import "./AdminDashboard.css";
import useGetRequest from "../../../hooks/useGetRequest";
import useDeleteRequest from "../../../hooks/useDeleteRequest";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

const AdminDashboard = () => {
  const { data, error, loading, fetchData } = useGetRequest("/users/all-users");
  const [showModal, setShowModal] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const userCount = data?.filter((user) => user.role === "User").length;
  const adminCount = data?.filter((user) => user.role === "Admin").length;
  const moduleOwnerCount = data?.filter(
    (user) => user.role === "ModuleOwner"
  ).length;

  const barData = {
    labels: ["Admin", "User", "Module Owner"],
    datasets: [
      {
        label: "Role number",
        data: [adminCount, userCount, moduleOwnerCount],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const { deleteHandler } = useDeleteRequest(
    "/admin/delete_users",
    selectedUsers
  );

  const handleCheckboxChange = (userid) => {
    setSelectedUsers((prev) =>
      prev.includes(userid)
        ? prev.filter((id) => id !== userid)
        : [...prev, userid]
    );
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const confirmDelete = async () => {
    const [, deleteError] = await deleteHandler();
    if (!deleteError) {
      setShowModal(false);
      fetchData();
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      {loading === "loading" && (
        <div className="load-container">
          <div className="loading">
            <i class="fa-solid fa-spinner fa-spin"></i>
          </div>
        </div>
      )}
      {loading === "failed" && <p>Error: {error}</p>}
      {loading === "succeeded" && (
        <>
          <div className="chart-container">
            <div className="chart">
              <h2>User Distribution by Role </h2>
              <Bar
                data={barData}
                options={{
                  indexAxis: "y",
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
          {/* Table Section */}
          <div className="table-card">
            <h2>User Information</h2>
            <div className="table-header">
              <button
                className="delete-button"
                onClick={handleDeleteClick}
                disabled={selectedUsers.length === 0}
              >
                Delete
              </button>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>2FA Enabled</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data?.map((user) => (
                      <tr key={user.userid}>
                        <td>
                          <label class="container">
                            <input
                              type="checkbox"
                              checked={selectedUsers.includes(user.userid)}
                              onChange={() => handleCheckboxChange(user.userid)}
                            />
                            <div class="checkmark"></div>
                          </label>
                        </td>
                        <td>{user.userid}</td>
                        <td>{user.username}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.phonenumber}</td>
                        <td>{user.role}</td>
                        <td>{user.istwofactorenabled ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this user?</p>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={confirmDelete}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
