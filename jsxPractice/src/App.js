import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";
console.log(AlexaImage);
export default function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
      <ProfileCard title="cortana" handle="@alexa" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@alex" image={SiriImage} />
    </div>
  );
}
