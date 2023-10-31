import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://img.freepik.com/free-photo/charming-girl-stands-street_8353-5373.jpg?size=626&ext=jpg&uid=R114002739&ga=GA1.1.1846457180.1689760031&semt=ais"
          alt=""
        />
        <p> Welcome to BlogDay :) </p>
            <p> I'm Emma, the founder of this platform. We're here to provide you with a simple, user-friendly space to share your thoughts, stories, and expertise through blogging. Whether you're a seasoned blogger or just getting started, BlogDay is your creative outlet. Our goal is to make blogging accessible to everyone. With our intuitive tools and a supportive community, you can start writing and connecting with readers effortlessly. Join us in the journey of self-expression and discovery. Your words have the power to inspire, educate, and entertain. We're excited to be a part of your blogging adventure.
            </p>
            <p>Thank you for choosing BlogDay!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>        
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}