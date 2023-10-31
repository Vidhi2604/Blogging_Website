import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
            src="https://img.freepik.com/free-photo/attractive-woman-reading-magazine-near-panoramic-window_7502-9287.jpg?size=626&ext=jpg&uid=R114002739&ga=GA1.1.1846457180.1689760031&semt=sph"
            alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                    <Link className="link" to="/posts?cat=Music">
                    Music
                    </Link>
                </span>
                <span className="postCat">
                    <Link className="link" to="/posts?cat=Music">
                    Life
                    </Link>
                </span>
            </div>
            <span className="postTitle">
                <Link to="/post/abc" className="link">
                    How to lead a peaceful life!
                </Link>
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            In today's fast-paced world, finding inner peace is a paramount goal for many. In my latest blog post, "How to Lead a Peaceful Life," I delve into a range of strategies and practices that can help you navigate life with a sense of calm and tranquility. From the power of mindfulness and meditation to the importance of setting boundaries and managing stress effectively, this blog post offers a comprehensive guide to achieving a peaceful life. I'll explore the significance of gratitude, self-care, and positive relationships in maintaining a harmonious existence, highlighting the profound impact these factors can have on our overall well-being. We'll also discuss the art of letting go and embracing simplicity, as well as the benefits of pursuing hobbies and passions that bring joy and fulfillment. By the end of this post, you'll be equipped with practical insights and actionable tips that will empower you to lead a more peaceful and balanced life, regardless of the challenges that come your way. So, if you're seeking a path to tranquility and harmony, stay tuned for valuable advice on how to lead a peaceful life.
        </p>
    </div>
  )
}
