import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Your Daily</span>
            <span className="headerTitleLg">Blog Spot</span>
        </div>
        <img 
            className="headerImg"
            src="https://img.freepik.com/free-photo/field-flowers-with-blue-background_1340-31767.jpg?size=626&ext=jpg&uid=R114002739&ga=GA1.1.1846457180.1689760031&semt=ais"
            alt="homepage"
        />

    </div>
  );
}
 