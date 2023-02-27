import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage img={props.tweet.user.image}></ProfileImage>

      <div className="body">
        
        <div className="top">
          <User userData={props.tweet.user}></User>
          <Timestamp time={props.tweet.timestamp}></Timestamp>
        </div>

        <Message message={props.tweet.message}></Message>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
