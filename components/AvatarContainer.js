import Avatar from "@mui/material/Avatar";

function AvatarContainer() {
  return (
    <div className="w-1/5 h-1/5 mb-5">
      <Avatar
        alt="Thomas Murzyn"
        src={`/me.jpg`}
        className="w-full h-full object-contain border-2 border-Light dark:border-Dark shadow-sm dark:shadow shadow-Light dark:shadow-Dark"
      />
    </div>
  );
}

export default AvatarContainer;
