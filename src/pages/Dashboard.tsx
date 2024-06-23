import React from "react";
import AdminSlidebar from "../components/AdminSlidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}

      <AdminSlidebar />

      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="search for data, users, docs" />
          <FaRegBell />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
            alt="User"
          />
        </div>

        <section className="widgetContainer">
          <WidgetItem  percent={40} amount={true} value={340000} heading="Revenue" color="rgb(0,115,255)"/>
          <WidgetItem  percent={-14}  value={400} heading="Users" color="rgb(0,198,202)"/>
          <WidgetItem  percent={80}  value={23000} heading="Transaction" color="rgb(255,196,0)"/>
          <WidgetItem  percent={40} amount={false} value={1000} heading="Products" color="rgb(75,0,255)"/>
        </section>
      </main>

      {/* Main */}
    </div>
  );
};
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount: string;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount=false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> + {percent}%{" "}
        </span>
      )}
    </div>

    <div className="widgetCircle" style={{
      background: `conic-gradient(
      ${color} ${(Math.abs(percent)/100)*360}deg,
      rgb(255,255,255) 0)`
    }}>
     <span style={{
      color
     }}>{percent}%</span>

    </div>
  </article>
);
export default Dashboard;
