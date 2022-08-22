import Link from "next/link";
import styles from "../../styles/Contacts.module.css";

export const getStaticProps = async () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  try {
    const responce = await fetch(URL);
    const resData = await responce.json();
    return {
      props: { contacts: resData },
    };
  } catch (error) {
    console.error(error.message);
  }
};

const Contacts = ({ contacts }) => {
  return (
    <div>
      <h1>All Contacts</h1>
      {contacts.map((user) => {
        return (
          <Link href={`/contacts/${user.id}`} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Contacts;
