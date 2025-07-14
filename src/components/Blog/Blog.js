import { useState, useEffect, useCallback } from "react";
import "./Blog.css";
import Button from "../Button/Button";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [louding, setLouding] = useState(false);
  const [pageCounts, setPageCounts] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const loudPosts = async () => {
    setLouding(true);
    const responsePosts = await fetch(
      "https://mocki.io/v1/5ac10122-3559-4b64-9f95-0398e30b7ce4"
    );
    const posts = await responsePosts.json();
    setPosts(posts);
    setLouding(false);
  };

  useEffect(() => {
    loudPosts();
  }, []);

  useEffect(() => {
    setPageCounts(calculatePageCounts());
  }, [posts]);

  const calculatePageCounts = () => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  };

  const handleClickOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  }, []);

  return (
    <div className="blog">
      {louding && <div>louding</div>}
      {posts.length === 0 && <div>No Posts</div>}
      {posts.length > 0 && (
        <ul>
          {posts
            .slice(3 * (activePageNumber - 1), 3 * activePageNumber)
            .map((post) => (
              <li className="blogItem" key={`post-${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
        </ul>
      )}
      <div>
        <ul className="pagination">
          {new Array(pageCounts).fill(0).map((item, index) => (
            <li className={activePageNumber === index + 1 ? "active" : ""}>
              <Button HandleClick={() => handleClickOnPages(index + 1)}>
                {index + 1}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;

// React های قدیمی در lifeCycle
// class Blog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clicked: 0, updateNumber: 0, didMount: false };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         didMount: true,
//       });
//       this.handleClick();
//     }, 2000);
//   }

//   componentDidUpdate() {
//     const { updateNumber } = this.state;
//     if (updateNumber === 0) {
//       this.setState({
//         updateNumber: this.state.updateNumber + 1,
//       });
//     }
//   }

//   componentWillUnmount() {
//     console.log("Nn Mount");
//   }

//   handleClick = () => {
//     this.setState({ clicked: this.state.clicked + 1 });
//     console.log("clicked");
//   };

//   render() {
//     const { clicked, didMount, updateNumber } = this.state;
//     return (
//       <div>
//         <h2>Blog Class</h2>
//         <p>Clicked Number: {clicked}</p>
//         <button onClick={this.handleClick}>Click</button>
//         <h2>Component Did Mount</h2>
//         <p>Is It Mounted? {didMount ? "Yes" : "No"}</p>
//         <h2>Component Did Update</h2>
//         <p>How Many Times Is It Update? {updateNumber}</p>
//       </div>
//     );
//   }
// }
