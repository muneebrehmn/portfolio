"use client";

import { useEffect } from "react";

export default function ChatbaseWidget() {
  useEffect(() => {
    (function () {
      // prevent duplicate initialization
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args: any[]) => {
          if (!window.chatbase.q) window.chatbase.q = [];
          window.chatbase.q.push(args);
        };

        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop: string) {
            if (prop === "q") return target.q;
            return (...args: any[]) => target(prop, ...args);
          },
        });
      }

      const onLoad = () => {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "MT8Qat_0POyD6Hbm13XkB"; // your widget ID
        script.setAttribute("domain", "www.chatbase.co");
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    })();
  }, []);

  return null;
}
