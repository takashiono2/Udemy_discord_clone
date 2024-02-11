import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import useCollection from "../../hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector(state=> state.user.user);
  const { documents: channels } = useCollection("channels");

  const addChannel = async()=>{
    let channelName: string | null = prompt("新しいチャンネルを作成します");

    if(channelName){
      console.log(channelName);
      await addDoc(collection(db,"channels"),{
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      {/* sidebarleft */}
      <div className="sidebarLeft">
        <div className="sidebarIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="sidebarIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>

      {/* sidebarright */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" onClick={()=>addChannel()}/>
          </div>
          <div className="sidebarChannelList">
          {channels.map((channel)=>(
            <SidebarChannel
              channel={channel}
              id={channel.id}
              key={channel.id}
            />
          ))}
          </div>
          <div className="sidebarFooter">
            <div className="sidebarAcconut">
              <img src={user?.photo} alt="" onClick={()=>auth.signOut()}/>
              <div className="accounName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0,4)}</span>
              </div>
            </div>
            <div className="sidebarVoice">
            <MicIcon />
            <HeadphonesIcon />
            <SettingsRoundedIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
