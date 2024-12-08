import { useEffect, useState } from "react";

// import UserProfileEditBtns from "./ProfileEditBtns/ProfileEditBtns";
// import UserProfileActionsBtns from "./ProfileActionsBtns/ProfileActionsBtns";
// import UserProfileGallerySection from "./ProfileGallerySection/ProfileGallerySection";
// import UserProfileHeaderNavigation from "./ProfileHeaderNavigation/ProfileHeaderNavigation";
// import UserProfileImageDisplay from "./ProfileImageDisplay/ProfileImageDisplay";
// import UserProfileStatsSection from "./ProfileStatsSection/ProfileStatsSection";
// import UserProfileUserDetails from "./ProfileUserDetails/ProfileUserDetails";
import axios from "axios";
import FooterMenu from "../FooterMenu/FooterMenu";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfilePicUser } from "../../store/slices/userSlice";
import UserProfileHeaderNavigation from "./UserProfileHeaderNavigation/UserProfileHeaderNavigation";

const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    // setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/users/${username}`,
        {
          withCredentials: true,
        },
      );

      setUserData(data);
    } catch (error) {
      console.error(`Error has occurred durning fetching API: `, error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <div>
        <h2>Now showing post {username}</h2>
      </div>
      {/* {loading ? (
        <Loader />
      ) : (
        <div>
           <div className="p-[0.5em] text-white">
            <div className="rounded-[1em] bg-profileSectionTheme font-CaustenFont">
              <Link to="/search">
                <button>
                  <BackPageArrow top={35} left={25} />
                </button>
              </Link>{" "}
              <div className="flex w-full flex-row items-center justify-center">
                <div className="flex w-full flex-col items-center">
                  <div>
                    <div className="flex w-full flex-row items-center justify-start gap-[1em]">
                      <div className="rounded-full bg-white p-[0.1em]">
                        <div className="rounded-full bg-profileSectionTheme">
                          <ProfileImageDisplay
                            profileImgUrl={userData?.user?.profilePic}
                          />
                        </div>
                      </div>
                      <div>
                        <ProfileUserDetails
                          userName={userData?.user?.username}
                          displayName={userData?.user?.displayName}
                        />
                        <ProfileActionsBtns />
                      </div>
                    </div>
                  </div>
                  <ProfileStatsSection
                    followers={userData?.followers}
                    following={userData?.following}
                    posts={userData?.Posts}
                  />
                </div>
              </div>
              <ProfileEditBtns />
            </div>
            <ProfileGallerySection posts={userData?.Posts} />
            <FooterMenu pageValue={"Profile"} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default UserProfile;
