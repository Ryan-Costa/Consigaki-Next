import { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`toggle-switch flex h-7 w-14 items-center rounded-full ${
        isOn ? "bg-goldenrod" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`toggle-ball h-6 w-6 rounded-full bg-black ${
          isOn ? "translate-x-8" : "translate-x-0"
        } transition-transform duration-300`}
      />
    </div>
  );
}
