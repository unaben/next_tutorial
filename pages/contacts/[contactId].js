export const getStaticPaths = async () => {
  const URL = `https://jsonplaceholder.typicode.com/users`;
  try {
    const responce = await fetch(URL);
    const resData = await responce.json();

    const paths = resData.map((user) => {
      return {
        params: { contactId: user.id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.contactId;
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  try {
    const responce = await fetch(URL);
    const resData = await responce.json();
    return {
      props: { user: resData },
    };
  } catch (error) {
    console.error(error.message);
  }
};

const ContactDetails = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default ContactDetails;
