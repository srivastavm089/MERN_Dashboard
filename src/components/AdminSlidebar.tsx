import React from "react";
import { IconType } from "react-icons";
import { Link, useLocation, Location } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";
const AdminSlidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Dudo Admin</h2>
      <DivOne location={location}/>
      <DivTwo location={location}/>
      {/* <DivThree location={location}/> */}


     
      
    </aside>
  );
};
const DivOne =({location}:{location:Location})=>(
    <div>
    <h5>Dashboard</h5>
    <ul>
     
      
      <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />

      <Li url="/admin/product" text="Product" Icon={RiShoppingBag3Fill} location={location} />
      {/* <li>
        <Link to={"/admin/cutomers"}>
          <IoIosPeople />
          Customer
        </Link>
      </li> */}

      <Li url="/admin/cutomers" text="Customers" Icon={IoIosPeople} location={location} />
      {/* <li>
        <Link to={"/admin/transaction"}>
          <AiFillFileText />
          Transaction
        </Link>
      </li> */}

      <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location} />
    </ul>
  </div>


      )


const DivTwo =({location}:{location:Location})=>(
    <div>
    <h5>Charts</h5>
    <ul>
     
      
      <Li url="/admin/charts/bar" text="Bar" Icon={FaChartBar} location={location} />

      <Li url="/admin/charts/pie" text="Pie" Icon={FaChartPie} location={location} />
   
      <Li url="/admin/charts/line" text="Line" Icon={FaChartLine} location={location} />
    


    </ul>
  </div>
)
const DivThree =({location}:{location:Location})=>(
    <div>
    <h5>Dashboard</h5>
    <ul>
     
      
      <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />

      <Li url="/admin/product" text="Product" Icon={RiShoppingBag3Fill} location={location} />
      {/* <li>
        <Link to={"/admin/cutomers"}>
          <IoIosPeople />
          Customer
        </Link>
      </li> */}

      <Li url="/admin/cutomers" text="Customers" Icon={IoIosPeople} location={location} />
      {/* <li>
        <Link to={"/admin/transaction"}>
          <AiFillFileText />
          Transaction
        </Link>
      </li> */}

      <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location} />
    </ul>
  </div>
)
interface LiProps {
  url: string;
  text: string;
  location:Location,
  Icon:IconType
}
const Li = ({url,text,location,Icon}: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url)
          ? "rgb(0,115,255)"
          : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSlidebar;
