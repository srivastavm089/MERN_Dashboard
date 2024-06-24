import React from "react";
import AdminSlidebar from "../components/AdminSlidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { BarChart } from "../components/Charts";
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
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transaction"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percent={40}
            amount={false}
            value={1000}
            heading="Products"
            color="rgb(75,0,255)"
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* Graph Here */}

            <BarChart data_1={[100, 200, 300, 400, 500, 600]} data_2={[10, 20, 30, 40, 50, 60]} bgColor_1="rgb(0,115,255)" bgColor_2="rgb(0,198,202)" title_1="Revenue" title_2="Transaction" labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}/>

          </div>
          <div className="dashboardCategory">
            <h2>Inventory</h2>
            <div>
              {/* <CategoryItem heading="Laptops" value={70} color="hsl(, 50%,50%)"/> */}
              <CategoryItem color="hsl(68, 40%,50%)" value={70} heading="Mobile"  />
              <CategoryItem heading="Shoes" value={70} color="hsl(169, 100%,50%)"/>
              <CategoryItem heading="Cameras" value={70} color="hsl(16, 100%,50%)"/>
              <CategoryItem heading="Jeans" value={70} color="hsl(18, 50%,50%)"/>
              <CategoryItem heading="Shirt" value={70} color="hsl(5, 50%,50%)"/>
            </div>
            
          </div>
          
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
  amount = false,
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

    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
      ${color} ${(Math.abs(percent) / 100) * 360}deg,
      rgb(255,255,255) 0)`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);


interface CategoryItemProps{
  color:string,
  value:number,
  heading:string
}
const CategoryItem =({color,value,heading}:CategoryItemProps)=>(
  <div className="category-item">
<h5>{heading} </h5>
<h3></h3>
<div>
  <div style={{
    backgroundColor:color, width:`${value}%`
  }}>

  </div>
</div>
<span>{value}%</span>

  </div>
)
export default Dashboard;
