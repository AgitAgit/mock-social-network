import { useEffect, useState } from "react";
import EditProfile from "./EditProfile/EditProfile";
import ProfileActionsBtns from "./ProfileActionsBtns/ProfileActionsBtns";
import ProfileGallerySection from "./ProfileGallerySection/ProfileGallerySection";
import ProfileHeaderNavigation from "./ProfileHeaderNavigation/ProfileHeaderNavigation";
import ProfileImageDisplay from "./ProfileImageDisplay/ProfileImageDisplay";
import ProfileStatsSection from "./ProfileStatsSection/ProfileStatsSection";
import ProfileUserDetails from "./ProfileUserDetails/ProfileUserDetails";
import axios from "axios";
import FooterMenu from "../FooterMenu/FooterMenu";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/users/data", {
        withCredentials: true,
      });

      setUserData(data);
    } catch (error) {
      console.error(`Error has occurred durning fetching API: `, error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="p-[0.5em] text-white">
      <div className="rounded-[1em] bg-profileSectionTheme font-CaustenFont">
        <ProfileHeaderNavigation />
        <div className="flex w-full flex-row items-center justify-center">
          <div className="flex w-full flex-col items-center">
            <div>
              <div className="flex w-full flex-row items-center justify-start gap-[1em]">
                <div className="rounded-full bg-profileCircleColor p-[0.1em]">
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
        <EditProfile />
      </div>
      <ProfileGallerySection posts={userData?.Posts} />
      <FooterMenu pageValue={"Profile"} />
    </div>
  );
};

export default Profile;
