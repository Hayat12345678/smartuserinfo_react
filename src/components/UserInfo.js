export const UserInfo = ({ user }) => {
 
    return (
      <div>
        {user ? (
          <>
            <h1>UserInfo</h1>
            <p>{user.name}</p>
            <p>{user.phone}</p>
            <p>
              {user?.address?.geo?.lat} / {user.address.geo.lng}
            </p>
          </>
        ) : (
          <h1>Bitte wählen Sie einen User</h1>
        )}
      </div>
    );
  };
  