import styles from "./Profile.module.css";
import user from "../../../../dataJSON/user.json";
import Badge from "../Badge/Badge";
function Profile() {
  const { name, tag, location, avatar, stats } = user;

  return (
    <>
      <h2 className={styles.title}>Profile User</h2>
      <section className={styles.container}>
        <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
        {name && <h2 className={styles.name}>{name}</h2>}
        {tag && <p className={styles.tag}>{tag}</p>}
        {location && <p className={styles.location}>{location}</p>}
        <Badge stats={stats} />
      </section>
    </>
  );
}
// Section.defaultProps = {
//   // непонятно как установить дефолтные значения???
//   tag: "N/A",
//   location: "N/A",
// };

// Section.propTypes = {
//   user: PropTypes.exact({
//     name: PropTypes.string,
//     tag: PropTypes.string,
//     location: PropTypes.string,
//     avatar: PropTypes.string,
//     stats: PropTypes.exact({

//     })
//   }),
//   children: PropTypes.node.isRequired,
// };
export default Profile;
