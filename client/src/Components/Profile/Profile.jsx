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
  console.log(userData);

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
                    <ProfileImageDisplay />
                  </div>
                </div>
                <div>
                  <ProfileUserDetails />
                  <ProfileActionsBtns />
                </div>
              </div>
            </div>
            <ProfileStatsSection />
          </div>
        </div>
        <EditProfile />
      </div>
      <ProfileGallerySection />
      <FooterMenu pageValue={"Profile"} />
    </div>
  );
};

export default Profile;
