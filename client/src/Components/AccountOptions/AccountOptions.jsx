import { Link, useNavigate } from "react-router-dom";

// Import icons
import { IoArrowBackOutline } from "react-icons/io5";
import {
  MdOutlineBookmarkBorder,
  MdOutlineArchive,
  MdOutlineLock,
  MdOutlineAccessTime,
  MdOutlineDevices,
  MdPeopleAlt,
  MdCompareArrows,
  MdBlock,
  MdOutlineVisibilityOff,
  MdPersonAdd,
} from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { IoLockClosedOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiFlipFlops } from "react-icons/gi";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountSettingsSearchBar from "../AccountSettingsSearchBar/AccountSettingsSearchBar";
import OptionTab from "./OptionTab";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { CiAt } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TiArrowSync } from "react-icons/ti";
import { AiOutlineFontSize } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { BsBellSlash } from "react-icons/bs";
import { TbPhotoVideo } from "react-icons/tb";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { CiMobile3 } from "react-icons/ci";
import { LiaUniversalAccessSolid } from "react-icons/lia";
import { LiaLanguageSolid } from "react-icons/lia";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { TbHomeShield } from "react-icons/tb";
import { MdSupport } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInbox } from "react-icons/ai";
import { MdOutlineVerified } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

const lineStyle = "border-[0.001em] border-gray-400";

const AccountOptions = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-1 flex w-[100vw] flex-col p-[1.5em] text-white">
      <div className="ml-[1em] flex flex-col items-start justify-start">
        <div className="flex w-full flex-row items-center justify-between">
          <button onClick={() => navigate(-1)}>
            <IoArrowBackOutline
              style={{
                position: "absolute",
                top: "30px",
                left: "24px",
                color: "white",
                fontSize: "24px",
              }}
            />
          </button>
          <h1 className="mb-[0.5em] w-full text-center text-white">
            Setting and activity
          </h1>
        </div>
      </div>
      <hr className={lineStyle} />
      <div className="SearchbarContainer mb-[0.5em] flex w-full flex-row items-start justify-around">
        <AccountSettingsSearchBar />
      </div>
      <div className="YourAccountContainer flex items-center justify-between">
        <div>
          <h3 className="p-[0.5em] text-gray-500">Your account</h3>
        </div>
        <div className="flex items-center gap-[0.5em]">
          <GiFlipFlops />
          <p className="p-[0.5em] text-gray-500">Babagram</p>
        </div>
      </div>
      <Link to="/account-center">
        <div className="AccountCenterContainer mt-[0.5em] flex-col items-start justify-start gap-[0.5em] rounded-[0.2em] p-[0.5em] hover:bg-slate-700">
          <div className="flex flex-col items-center gap-[0.5em]">
            <div className="flex w-full flex-row items-center justify-between gap-[0.5em]">
              <div className="flex flex-row items-center gap-[0.5em]">
                <div>
                  <CgProfile />
                </div>
                <div>
                  <h3>Accounts Center</h3>
                </div>
              </div>
              <div>
                <ArrowForwardIcon />
              </div>
            </div>
            <div>
              <p className="p-[0.5em] text-gray-500">
                Password, security, personal details, ad preferences
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="mb-[0.5em]">
        <p>
          Manage your connected experiences and account settings across Meta
          technologies.
          <Link className="p-[0.5em] text-gray-500 hover:text-white">
            <button>Learn more</button>
          </Link>
        </p>
      </div>
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">How you use babagram</h2>
      <OptionTab
        icon={<MdOutlineBookmarkBorder />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Saved"
      />
      <OptionTab
        icon={<MdOutlineArchive />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Archive"
      />
      <OptionTab
        icon={<LuActivitySquare />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Your Activity"
      />
      <OptionTab
        icon={<BiBell />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Notifications"
      />
      <OptionTab
        icon={<IoTimeOutline />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Time Management"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">Who can see your content</h2>
      <OptionTab
        icon={<IoLockClosedOutline />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Account Privacy"
      />
      <OptionTab
        icon={<MdPeopleAlt />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Close Friends"
      />
      <OptionTab
        icon={<MdCompareArrows />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Crossposting"
      />
      <OptionTab
        icon={<MdBlock />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Blocked"
      />
      <OptionTab
        icon={<MdOutlineVisibilityOff />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Hide Story and Live"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">
        How others can interact with you
      </h2>
      <OptionTab
        icon={<BiSolidMessageRoundedDots />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Message and story replies"
      />
      <OptionTab
        icon={<CiAt />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Tags and Mentions"
      />
      <OptionTab
        icon={<FaRegComment />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Comments"
      />
      <OptionTab
        icon={<TiArrowSync />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Sharing"
      />
      <OptionTab
        icon={<MdOutlineLock />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Restricted"
      />
      <OptionTab
        icon={<MdOutlineAccessTime />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Limit Interactions"
      />
      <OptionTab
        icon={<AiOutlineFontSize />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Hidden Words"
      />
      <OptionTab
        icon={<MdPersonAdd />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Follow and Invite Friends"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">What you see</h2>
      <OptionTab
        icon={<FaRegStar />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Favorites"
      />
      <OptionTab
        icon={<BsBellSlash />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Muted Accounts"
      />
      <OptionTab
        icon={<TbPhotoVideo />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Suggested Content"
      />
      <OptionTab
        icon={<IoHeartDislikeOutline />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Like and Share Counts"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">Your app and media</h2>
      <OptionTab
        icon={<CiMobile3 />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Device permissions"
      />
      <OptionTab
        icon={<HiDownload />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Archiving and downloading"
      />
      <OptionTab
        icon={<LiaUniversalAccessSolid />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Accessibility and translations"
      />
      <OptionTab
        icon={<LiaLanguageSolid />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Language"
      />
      <OptionTab
        icon={<BsFillFileEarmarkBarGraphFill />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Media quality"
      />
      <OptionTab
        icon={<MdOutlineDevices />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="App website permissions"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">For families</h2>
      <OptionTab
        icon={<TbHomeShield />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="App website permissions"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">For professionals</h2>
      <OptionTab
        icon={<VscGraph />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Account type and tools"
      />
      <OptionTab
        icon={<MdOutlineVerified />}
        navigateRoute={"/"}
        arrowIcon={<ArrowForwardIcon />}
        title="Babagram Verified"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">Your orders and fundraisers</h2>
      <OptionTab
        icon={<TbHomeShield />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Fundraisers"
      />
      <OptionTab
        icon={<AiOutlineInbox />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Orders and payments"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">More info and support</h2>
      <OptionTab
        icon={<MdSupport />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Help"
      />
      <OptionTab
        icon={<MdOutlinePrivacyTip />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Privacy Center"
      />
      <OptionTab
        icon={<IoPersonOutline />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Account Status"
      />
      <OptionTab
        icon={<MdInfoOutline />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="About"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">Also from Babagram</h2>
      <OptionTab
        icon={<FaWhatsapp />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="WhatsApp"
      />
      <OptionTab
        icon={<FaThreads />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Threads"
      />
      <OptionTab
        icon={<RiFacebookCircleLine />}
        arrowIcon={<ArrowForwardIcon />}
        navigateRoute={"/"}
        title="Facebook"
      />
      <hr className={lineStyle} />
      <h2 className="p-[0.5em] text-gray-500">Login</h2>
      <OptionTab
        arrowIcon={<ArrowForwardIcon />}
        title="Add account"
        navigateRoute={"/"}
      />
      <OptionTab
        arrowIcon={<ArrowForwardIcon />}
        title="Log out"
        navigateRoute={"/sign-in"}
      />
    </div>
  );
};

export default AccountOptions;
