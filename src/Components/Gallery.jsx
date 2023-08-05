import { Profile } from "./Profile";
import { ProfileM } from "./ProfileM";

export const Gallery = () => {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
        <br/>
        <h1>Amazing scientists</h1>
        <ProfileM/>
        <ProfileM/>
        <ProfileM/>
      </section>
    );
  }