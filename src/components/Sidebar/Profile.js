import ProfileImage from '../../assets/images/profile.jpg';

function Profile() {
  return (
    <>
      <img id="profileImage" height={50} width={50} src={ProfileImage} alt="Profile" />
      <h1>Manosh Jacob</h1>
    </>
  );
}

export default Profile;
