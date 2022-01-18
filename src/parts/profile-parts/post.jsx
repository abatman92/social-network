import postStyle from '../../styles/profile-parts/post.module.css';

function Post(props) {
    return (
      <div className={postStyle.post}>
        <img
          src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"
          alt="avatar"
        />
        {props.message}
      </div>
    )
}

export default Post