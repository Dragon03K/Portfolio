import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import React from "react";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
        )}

        {subtitle && <h3 className="text-xl font-bold mb-2">{subtitle}</h3>}

        {description &&
          description.map((paragraph, index) => (
            <p key={index} className="mb-2 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
